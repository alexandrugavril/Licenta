/**
 * Created by alex on 6/6/16.
 */
var witToken = "NCMMPEGNNKEMYXOFPK7ELRCGYBS4G56M";
var entities = [];
var https = require('https');
var RuleEngine = require('node-rules');
qs = require('querystring');
db = require('./redisDb/redis.js');

exports.getEntities = function(req,res){
    var options = {
        host: 'api.wit.ai',
        path: '/entities?v=20160526',
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + witToken}
    };

    callback = function(response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            console.log("DONE!");
            res.send(str);
        });
    };
    var Newreq = https.request(options, callback);
    Newreq.end();
};

exports.getIntents = function(req,res){
    var options = {
        host: 'api.wit.ai',
        path: '/intents?v=20160526',
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + witToken}
    };

    callback = function(response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            console.log("DONE!");
            var intents = JSON.parse(str);
            result = [];
            for (var i = 0; i < intents.length; i++){
                result.push(intents[i].name);
            }
            res.send(result);
        });
    };
    var Newreq = https.request(options, callback);
    Newreq.end();
};

exports.callWit = function(req,res){

    if (req.method === 'POST' && req.url === '/callWit') {
        var text = '';

        req.on('data', function(chunk) {
            text += chunk;
        });
        req.on('end', function() {

            qJson = qs.parse(text);
            qTxt = qs.stringify(qJson);

            var options = {
                host: 'api.wit.ai',
                path: '/message?v=20160526&' + qTxt,
                method: 'GET',
                headers: {'Authorization' : 'Bearer ' + witToken}
            };

            var callback = function(response) {
                var str = '';
                response.on('data', function (chunk) {
                    str += chunk;
                });

                response.on('end', function () {
                    match(res, str);
                });
            };
            var Newreq = https.request(options, callback);
            Newreq.end();
        });
    } else {
        res.writeHead(404);
        res.end();
    }

};

function contains(array, data){
    return array.indexOf(data) > -1;
}

var NO_MATCH = "NO MATCH";

var rules = [
    //MEDICATION
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicationQueries' && contains(this.keyEnts, 'medication') && contains(this.keyEnts, 'action') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            console.log("DATE ASKED::" + dateAsked);
            db.getMedication(this.res, dateAsked );
            R.stop();
        }
    },
    {
        'condition': function (R) {
            R.when(this.intent == 'MedicationInformation' && contains(this.keyEnts, 'number') && contains(this.keyEnts, 'medication') && contains(this.keyEnts, 'action') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function (R) {
            dateAsked = this.entities['datetime'][0].value;
            number = this.entities['number'][0].value;
            console.log("DATE ASKED::" + dateAsked);
            db.insertMedication(this.res, dateAsked,number);
            R.stop();
        }
    },
    {
        'condition': function (R) {
            R.when(this.intent == 'MedicationInformation' && contains(this.keyEnts, 'medication') && contains(this.keyEnts, 'action') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function (R) {
            dateAsked = this.entities['datetime'][0].value;
            console.log("DATE ASKED::" + dateAsked);
            db.insertMedication(this.res, dateAsked);
            R.stop();
        }
    },
    //MEDICAL FACTS
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicalFactsQueries' && contains(this.keyEnts, 'medical_fact') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            medFact = this.entities['medical_fact'][0].value;
            console.log("DATE ASKED::" + dateAsked);
            db.getMedicalFact(this.res,medFact, dateAsked );
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicalFactsInformation' && contains(this.keyEnts, 'medical_fact') && contains(this.keyEnts, 'number') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            medFact = this.entities['medical_fact'][0].value;
            values = [];
            numbers = this.entities['number'];
            for(var i = 0 ; i < numbers.length; i++){
                cNr = numbers[i];
                values.push(cNr.value);
            }

            console.log("DATE ASKED::" + dateAsked);
            db.insertMedicalFact(this.res,medFact,values, dateAsked );
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'PhysicalExercisingQueries' && contains(this.keyEnts, 'exercise') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            console.log("DATE ASKED::" + dateAsked);
            db.getExercises(this.res, dateAsked );
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'PhysicalExercisingInformation' && contains(this.keyEnts, 'exercise') && contains(this.keyEnts, 'datetime') && contains(this.keyEnts, 'duration'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            duration = this.entities['duration'][0].normalized.value;
            console.log("DATE ASKED::" + dateAsked);
            db.insertExercises(this.res, dateAsked, duration );
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'PhysicalExercisingInformation' && contains(this.keyEnts, 'exercise') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            console.log("DATE ASKED::" + dateAsked);
            db.insertExercises(this.res, dateAsked );
            R.stop();
        }
    },
    //Environment Interactions
    {
        'condition' : function(R) {
            R.when(this.intent == 'EnvironmentInteractions' && contains(this.keyEnts, "on") && contains(this.keyEnts, 'environment_entity'))
        },
        'consequence': function(R) {
            envEnt = this.entities['environment_entity'][0].value;
            db.environmentOn(this.res, envEnt);
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'EnvironmentInteractions' && contains(this.keyEnts, "off") && contains(this.keyEnts, 'environment_entity'))
        },
        'consequence': function(R) {
            envEnt = this.entities['environment_entity'][0].value;
            db.environmentOff(this.res, envEnt);
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicalFactsInformation' && contains(this.keyEnts, 'medical_fact') && contains(this.keyEnts, 'number') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            medFact = this.entities['medical_fact'][0].value;
            values = [];
            numbers = this.entities['number'];
            for(var i = 0 ; i < numbers.length; i++){
                cNr = numbers[i];
                values.push(cNr.value);
            }

            console.log("DATE ASKED::" + dateAsked);
            db.insertMedicalFact(this.res,medFact,values, dateAsked );
            R.stop();
        }
    },
    //NO MATCH
    {
        'condition': function (R) {
            R.when(0 === 0)
        },
        'consequence': function (R) {
            this.result = NO_MATCH;
            R.stop();
        }
    }

];

var R = new RuleEngine(rules);

function match(res, data, id){
    json = JSON.parse(data);
    console.log( JSON.stringify(json, null, 2));
    var outcomes = json['outcomes'];
    if(typeof(outcomes) !== 'undefined')
    for (var i = 0; i < outcomes.length; i++) {
        var outcome = outcomes[i];
        var conf = outcome['confidence'];
        var intent = outcome['intent'];
        var entities = outcome['entities'];
        var keyEnts = Object.keys(entities);

        txt = intent + " [" + conf.toString() + "] :" + " " + outcome['_text'];
        txt = txt + "\n" + JSON.stringify(keyEnts) + "\n";

        var fact = {
            'intent' : intent,
            'keyEnts' : keyEnts,
            'entities' : entities,
            'res' : res
        };
        R.execute(fact,function(result){
            if(result.result === NO_MATCH)
                res.send(txt);
        });


    }
}
