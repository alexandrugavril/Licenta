
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
cortanaBot.add('/', dialog);



var context = OpenNI();

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
app.get('/entities', rules.getEntities);
app.get('/intents', rules.getIntents);




io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

io.on('speechSend', function(msg) {
    console.log(JSON.stringify(msg));
});

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

var pointsArray = [];
var smooth = require('chaikin-smooth');

//KALMAN FILTERS
var kalmanFilterX = new KalmanFilter({R: 0.05, Q: 2});
var kalmanFilterY = new KalmanFilter({R: 0.05, Q: 2});

var useSmooth =2 ;
var lastZ;


var pointsTestSet = [];
function generateTestSet(){
    for(var i = 0; i < 1000; i++){
        var r = Math.random();
        if(r < 0.2)
            pointsTestSet.push([10*i + 10*r, 0, 1000]);
        else
            pointsTestSet.push([10*i, 0, 1000]);
        console.log(pointsTestSet[i][0] + ","+pointsTestSet[i][1] +"," + pointsTestSet[i][2]);

    }
    console.log("__TEST__SET__")

}

function testPoints(){
    generateTestSet();
    for(var i = 0 ; i < pointsTestSet.length; i++){
        pSet = pointsTestSet[i];
        xK = pSet[0];
        yK = pSet[1];
        zK = pSet[2];
        if(lastZ){
            var dz = Math.abs(lastZ - zK);
            if(dz > 40){
                console.log("clicked!");
            }
        }
        lastZ = zK;
        pointsArray.push([xK, yK]);
        if (pointsArray.length == 10) {
            pointsArray.shift();
            if (useSmooth == 1) {
                var smoothedPath = smooth(pointsArray);
                var newPos = smoothedPath[smoothedPath.length / 2];
                var pos = {'x': Math.round(newPos[0]), 'y': Math.round(newPos[1]), 'z': Math.round(zK)};
                if (first) {
                    initPos = pos;
                    console.log(pos);
                    first = false;
                }
                else {
                    io.emit('kinect_pos', JSON.stringify(pos));
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
                for (var i = 0; i < dataConstantKalmanX.length; i++) {
                    newList.push([dataConstantKalmanX[i], dataConstantKalmanY[i]]);
                }
                var sPath = smooth(newList);
                sPath = smooth(sPath);
                var newPos = sPath[sPath.length / 2];
                var pos = {'x': newPos[0], 'y': newPos[1], 'z': Math.round(zK)};
                if (first) {
                    initPos = pos;
                    console.log(pos);
                    first = false;
                }
                else {
                    console.log(pos);


                }
            }
        }
    }

}

[
    "right_hand",
    "left_fingertip",
    "right_fingertip"
].forEach(function(joint) {

    context.on(joint, function(userId, xK, yK, zK) {
        if(joint == 'right_hand') {
            if(lastZ){
                var dz = Math.abs(lastZ - zK);
                if(dz > 40){
                }
            }
            lastZ = zK;
            pointsArray.push([xK, yK]);

            if (pointsArray.length == 10) {
                pointsArray.shift();
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
                    for (var i = 0; i < dataConstantKalmanX.length; i++) {
                        newList.push([dataConstantKalmanX[i], dataConstantKalmanY[i]]);
                    }
                    var sPath = smooth(newList);
                    sPath = smooth(sPath);
                    var newPos = sPath[sPath.length / 2];
                    var kPos = pointsArray[4];
                    str = kPos[0] + "," + kPos[1] +',';
                    var pos = {'x': newPos[0], 'y': newPos[1], 'z': Math.round(zK)};
                    if (first) {
                        initPos = pos;
                        io.emit('kinect_init_pos', JSON.stringify(pos));
                        first = false;
                        str += pos.x + "," + pos.y + "," + pos.z;
                    }
                    else {
                        io.emit('kinect_pos', JSON.stringify(pos));
                        str += pos.x + "," + pos.y + "," + pos.z;
                    }
                }
            }
        }
        else{
            console.log("FINGERTIP!!!!");
        }

    });


});
[
    'newuser',
    'userexit',
    'lostuser',
    'posedetected',
    'calibrationstart',
    'calibrationsucceed',
    'calibrationfail',
    'click',
    'wave'
].forEach(function(eventType) {
    context.on(eventType, function(userId) {
        console.log('User %d emitted event: %s', userId, eventType);
    });
});


http.listen(3000, function(){
    console.log('listening on *:3000');
});