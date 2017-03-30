
var express = require('express');
var bodyParser = require('body-parser');
var rules = require('./rules');
require('sylvester');
var OpenNI = require('./lib/node-openni/openni');
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});


var PORT = 3000;
var app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/'));

var http = require('http').Server(app);
var io = require('socket.io')(http);
var interpolatingPolynomial = require('natural-spline-interpolator');
var KalmanFilter = require('kalmanjs').default;

var builder = require('botbuilder');
var botUrl = "https://api.projectoxford.ai/luis/v1/application?id=9e9c32b0-4496-48b5-9a0b-0342511e3d4c&subscription-key=310de3dce0964707bbe019b877553fed";
var dialog = new builder.LuisDialog(botUrl);
var cortanaBot = new builder.TextBot();
var db = require('./redisDb/redis.js');
cortanaBot.add('/', dialog);


var context;
try {
    context = OpenNI();
}
catch(e)
{
    console.log("Kinect not avaliable");
    console.log(e);
}


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/message', function(req, res){
    console.log(JSON.stringify(req.body));
    var text = req.body['display'];
    var confidence = req.body['confidence'];
    res.send("OK");
});

app.post('/callWit', rules.callWit);
app.post('/callWitString', rules.callWitWithString);
app.get('/entities', rules.getEntities);
app.get('/intents', rules.getIntents);

app.post('/exercises', function(req,res) {
    if (req.method === 'POST' && req.url === '/exercises') {
        var text = '';

        req.on('data', function(chunk) {
            text += chunk;
        });
        req.on('end', function() {
            qJson = qs.parse(text);

            var data = new Date(+qJson.q);
            console.log(data.toString());
            db.getExercises(res, data, true);
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

app.post('/medications', function(req,res){
   if (req.method === 'POST' && req.url === '/medications'){
       var text = '';

       req.on('data', function(chunk) {
           text += chunk;
       });
       req.on('end', function() {
           qJson = qs.parse(text);

           var data = new Date(+qJson.q);
           console.log(data.toString());
           db.getMedication(res, data, true);
       });
   } else {
       res.writeHead(404);
       res.end();
   }
});

app.post('/heartrate', function(req,res) {
    if (req.method === 'POST' && req.url === '/heartrate'){
        var text = '';

        req.on('data', function(chunk) {
            text += chunk;
        });
        req.on('end', function() {
            qJson = qs.parse(text);

            var data = new Date(+qJson.q);
            console.log(data.toString());
            db.getHeartRate(res, data);
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});


io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('tracking', function(msg) {
        console.log("TRACKING " + msg.toString());
        if(msg)
            if(!track)
                startTracking();
        else
            if(track)
                stopTracking();
    });
});



var track = false;

function startTracking() {
    track = true;
    console.log("STARTED TRACKING");
    io.emit("tracking", true);
}


function stopTracking() {
    track = false;
    console.log("STOPPED TRACKING");
    pointsTrackingArray = [];
    io.emit("tracking", false);

}



var first = true;
var initPos;
var eps = 5;

var pointsVector;

function isValid(initPos, pos, eps) {
    if(Math.abs(initPos.x - pos.x) < eps)
        if(Math.abs(initPos.y - pos.y) < eps)
            if(Math.abs(initPos.z - pos.z) < eps)
                return false;
    return true;
}

function shouldTrack(pointsVector) {

    if(track == true){
        return true;
    }

    maxDistX = 0;
    maxDistY = 0;
    console.log(pointsVector);
    for(var i = 0; i < pointsVector.length - 1; i++){
        p1 = pointsVector[i];
        p2 = pointsVector[i+1];

        if(Math.abs(p1[0] - p2[0]) > maxDistX) {
            maxDistX = Math.abs(p1[0] - p2[0]);
        }

        if(Math.abs(p1[1] - p2[1]) > maxDistY) {
            maxDistY = Math.abs(p1[1] - p2[1]);
        }
    }

    if(track == false && maxDistX < 10 && maxDistY < 10){
        startTracking();
    }

}

var pointsArray = [];
var smooth = require('chaikin-smooth');

//KALMAN FILTERS
var kalmanFilterX = new KalmanFilter({R: 0.05, Q: 2});
var kalmanFilterY = new KalmanFilter({R: 0.05, Q: 2});

var useSmooth =2 ;
var lastZ;


var pointsTestSet = [];
var pointsTrackingArray = [];
var trackTimer = -1;

var oldPos;
[
    "right_hand",
].forEach(function(joint) {
    if(context)
    context.on(joint, function(userId, xK, yK, zK) {
        if(trackTimer != -1){
            clearTimeout(trackTimer);
        }
        trackTimer = setTimeout(function(){
            stopTracking();
        }, 1000);
        if(joint == 'right_hand') {
            if(lastZ){
                var dz = Math.abs(lastZ - zK);
                if(dz > 40){
                }
            }
            lastZ = zK;
            pointsArray.push([xK, yK]);
            pointsTrackingArray.push([xK, yK]);

            if (pointsArray.length == 10) {
                pointsArray.shift();
                if(pointsTrackingArray.length == 20){
                    shouldTrack(pointsTrackingArray);
                    pointsTrackingArray.shift();
                }
                if (useSmooth == 1) {
                    var smoothedPath = smooth(pointsArray);
                    var newPos = smoothedPath[smoothedPath.length/2];


                    var pos = {'x': Math.round(newPos[0]), 'y': Math.round(newPos[1]), 'z': Math.round(zK)};
                    if (first) {
                        initPos = pos;
                        io.emit('kinect_init_pos', JSON.stringify(pos));
                        str += pos.x + "," + pos.y + "," + pos.z;
                        first = false;
                    }
                    else {
                        io.emit('kinect_pos', JSON.stringify(pos));
                        str += pos.x + "," + pos.y + "," + pos.z;
                    }
                }
                else if (useSmooth == 2) {
                    var dataConstantKalmanX = pointsArray.map(function (v) {
                        return kalmanFilterX.filter(v[0]);
                    });
                    var dataConstantKalmanY = pointsArray.map(function (v) {
                        return kalmanFilterY.filter(v[1]);
                    });
                    var newList = [];
                    xSum = 0;
                    ySum = 0;
                    for (var i = 0; i < dataConstantKalmanX.length; i++) {
                        newList.push([dataConstantKalmanX[i], dataConstantKalmanY[i]]);
                        xSum += dataConstantKalmanX[i];
                        ySum += dataConstantKalmanY[i];
                    }

                    var sPath = smooth(newList);

                    for(var qstep = 0; qstep < 10; qstep++){
                        sPath = smooth(sPath);
                    }

                    var kPos = pointsArray[4];
                    newPos = [xSum / dataConstantKalmanX.length, ySum / dataConstantKalmanY.length];
                    var kalmanPos = [dataConstantKalmanX[4], dataConstantKalmanY[4]];

                    str = kPos[0] + "," + kPos[1] +',';
                    str += kalmanPos[0] + "," + kalmanPos[1] + ",";
                    var pos = {'x': newPos[0], 'y': newPos[1], 'z': Math.round(zK)};
                    if (first) {
                        if(track){
                            initPos = pos;
                            io.emit('kinect_init_pos', JSON.stringify(pos));
                            first = false;
                            str += pos.x + "," + pos.y + "," + pos.z;
                        }
                    }
                    else {
                        if(track){
                            io.emit('kinect_pos', JSON.stringify(pos));
                            str += pos.x + "," + pos.y;
                            console.log(str);
                        }

                    }
                }
            }
        }
        else{
            console.log("FINGERTIP!!!!");
        }

    });


});


http.listen(3000, function(){
    console.log('listening on *:3000');
});