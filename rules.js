/**
 * Created by alex on 6/6/16.
 */
var witToken = "NCMMPEGNNKEMYXOFPK7ELRCGYBS4G56M";
var entities = [];
var https = require('https');
var RuleEngine = require('node-rules');
qs = require('querystring');
db = require('./redisDb/redis.js');
singleton = require('./redisDb/singleton.js');



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

exports.callWitWithString = function(req,res){
    if(req.method === 'POST' && req.url === '/callWitString'){
        var text = '';

        req.on('data', function(chunk) {
            text += chunk;
        });
        req.on('end', function() {
            json = JSON.parse(text);
            newJson = {"q":json.Text};
            qTxt = qs.stringify(newJson);

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
                    if(typeof(json.RuleID) !== 'undefined')
                        match(res, str, true, json.RuleID);
                    else
                        match(res, str, true, -1);

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

function contains(array, data, nr){
    if(typeof(nr) === 'undefined')
        nr = 1;

    var count = array.reduce(function(n, val) {
        return n + (val === data);
    }, 0);
    return count >= nr;
}

function getDateEnd(grain, startDate){
    var endDate = new Date(startDate.getTime());
    if(grain == 'minute'){
        endDate.setMinutes(endDate.getMinutes() + 1);
        return endDate;
    }
    if(grain == 'hour'){
        endDate.setHours(endDate.getHours() + 1);
        return endDate;
    }
    if(grain == 'day'){
        endDate.setDate(endDate.getDate() + 1);
        return endDate;

    }
    if(grain == 'week'){
        endDate.setDate(endDate.getDate() + 7);
        return endDate;
    }
    if(grain == 'month'){
        endDate.setMonth(endDate.getMonth() + 1);
        return endDate;
    }
    if(grain == 'year'){
        endDate.setYear(endDate.getYear() + 1);
        return endDate;
    }
    else{
        endDate.setMinutes(endDate.getMinutes() + 1);
        return endDate;
    }
}

function parseWitDate(dateObj){
    if(dateObj.type == 'interval'){
        obj = new Object();
        obj.startDate = new Date(dateObj.from.value);
        obj.endDate = new Date(dateObj.to.value);
        return obj;
    }
    if(typeof(dateObj.value) !== 'undefined'){
        obj = new Object();
        obj.startDate = new Date(dateObj.value);
        obj.endDate = getDateEnd(dateObj.grain, obj.startDate);
        return obj;
    }
    obj = new Object();
    obj.startDate = Date.now();
    obj.endDate = Date.now();
    return obj;

}
var NO_MATCH = "NO MATCH";
var context = new Object();
var lastFact;


var rules = [

    //MEDICATION
    {

        'condition': function (R) {
            R.when(this.intent == 'MedicationInformation' && contains(this.keyEnts, 'number') && contains(this.keyEnts, 'medication') && contains(this.keyEnts, 'action') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function (R) {
            dateAsked = new Date(this.entities['datetime'][0].value);
            grain = this.entities['datetime'][0].grain;
            endDate = getDateEnd(grain, dateAsked);

            number = this.entities['number'][0].value;
            db.insertMedication(this.res, dateAsked,endDate, number);
            this.result = 1;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicationQueries' && contains(this.keyEnts, 'medication')&& contains(this.keyEnts, 'future_ref') && contains(this.keyEnts, 'action'))
        },
        'consequence': function(R) {
            this.res.send("I don't have any information about your future medication!");
            this.result = 2;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicationQueries' && contains(this.keyEnts, 'medication') && contains(this.keyEnts, 'action') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            eDate = getDateEnd(this.entities['datetime'][0].grain, new Date(dateAsked));
            db.getMedication(this.res, dateAsked,false, eDate);
            
            this.result = 3;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicationQueries' && contains(this.keyEnts, 'medication') && contains(this.keyEnts, 'action'))
        },
        'consequence': function(R) {
            singleton.Singleton.getInstance().context = this;
            singleton.Singleton.getInstance().missingEntities = ["datetime"];
            this.result = -2;
            this.res.send("When?");
            R.stop();
        }
    },

    {
        'condition': function (R) {
            R.when(this.intent == 'MedicationInformation' && contains(this.keyEnts, 'medication') && contains(this.keyEnts, 'action') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function (R) {
            dateAsked = this.entities['datetime'][0].value;
            db.insertMedication(this.res, dateAsked);
            this.result = 4;
            R.stop();
        }
    },
    //MEDICAL FACTS
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicalFactsQueries' && contains(this.keyEnts, "math_function") && contains(this.keyEnts, 'medical_fact') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            grain = this.entities['datetime'][0].grain;
            medFact = this.entities['medical_fact'][0].value;
            endDate = getDateEnd(grain, new Date(dateAsked));
            db.getMedicalFact(this.res,medFact, dateAsked,endDate,this.entities['math_function'][0].value);
            this.result = 5;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicalFactsInformation' && contains(this.keyEnts, 'medical_fact') && contains(this.keyEnts, 'primary')&& contains(this.keyEnts, 'secondary') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            grain = this.entities['datetime'][0].grain;
            endDate = getDateEnd(grain, new Date(dateAsked));

            medFact = this.entities['medical_fact'][0].value;
            values = [];
            primary = this.entities['primary'][0].value;
            secondary = this.entities['primary'][0].value;
            values.push(primary);
            values.push(secondary);

            db.insertMedicalFact(this.res,medFact,values, dateAsked , endDate);
            this.result = 6;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicalFactsQueries' && contains(this.keyEnts, 'medical_fact') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            grain = this.entities['datetime'][0].grain;
            medFact = this.entities['medical_fact'][0].value;
            endDate = getDateEnd(grain, new Date(dateAsked));
            db.getMedicalFact(this.res,medFact, dateAsked,endDate, "NONE");
            this.result = 7;
            R.stop();
        }
    },

    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicalFactsInformation' && contains(this.keyEnts, 'medical_fact') && contains(this.keyEnts, 'number') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            grain = this.entities['datetime'][0].grain;
            endDate = getDateEnd(grain, new Date(dateAsked));

            medFact = this.entities['medical_fact'][0].value;
            values = [];
            numbers = this.entities['number'];
            for(var i = 0 ; i < numbers.length; i++){
                cNr = numbers[i];
                values.push(cNr.value);
            }

            db.insertMedicalFact(this.res,medFact,values, dateAsked , endDate);
            this.result = 8;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'MedicalFactsInformation' && contains(this.keyEnts, 'medical_fact') && contains(this.keyEnts, 'qualifier') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            grain = this.entities['datetime'][0].grain;
            endDate = getDateEnd(grain, new Date(dateAsked));

            medFact = this.entities['medical_fact'][0].value;
            values = [];
            numbers = this.entities['qualifier'];
            for(var i = 0 ; i < numbers.length; i++){
                cNr = numbers[i];
                values.push(cNr.value);
            }

            db.insertMedicalFact(this.res,medFact,values, dateAsked , endDate);
            this.result = 9;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'PhysicalExercisingQueries' && contains(this.keyEnts, 'exercise') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            dateAsked = this.entities['datetime'][0].value;
            db.getExercises(this.res, dateAsked );
            this.result = 10;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'PhysicalExercisingInformation' && contains(this.keyEnts, 'exercise') && contains(this.keyEnts, 'datetime') && contains(this.keyEnts, 'duration'))
        },
        'consequence': function(R) {
            console.log('bla bla');
            dateAsked = this.entities['datetime'][0].value;
            duration = this.entities['duration'][0].normalized.value;
            db.insertExercises(this.res, dateAsked, duration );
            this.result = 11;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'PhysicalExercisingInformation' && contains(this.keyEnts, 'exercise') && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            singleton.Singleton.getInstance().context = this;
            singleton.Singleton.getInstance().missingEntities = ["duration"];
            this.result = -2;
            this.res.send("Please tell me for how long");
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
            this.result = 13;
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
            this.result = 14;
            R.stop();
        }
    },
    //Reminders
    {
        'condition' : function(R) {
            R.when(this.intent == 'RemindersInformations' && contains(this.keyEnts, "action")  && contains(this.keyEnts, "from") &&contains(this.keyEnts, "to"))
        },
        'consequence': function(R) {
            this.result = 21;
            this.res.send("Ok, I've moved it.");
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'RemindersInformations' && contains(this.keyEnts, "action")  && contains(this.keyEnts, "datetime",2))
        },
        'consequence': function(R) {
            this.result = 21;
            this.res.send("Ok, I've moved it.");
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'RemindersInformations' && contains(this.keyEnts, "action")  && contains(this.keyEnts, "datetime") &&contains(this.keyEnts, "to"))
        },
        'consequence': function(R) {
            this.result = 21;
            this.res.send("Ok, I've moved it.");
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'RemindersInformations' && contains(this.keyEnts, "action")  && contains(this.keyEnts, "from") && contains(this.keyEnts, "datetime"))
        },
        'consequence': function(R) {
            this.result = 21;
            this.res.send("Ok, I've moved it.");
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'RemindersInformations' && contains(this.keyEnts, "action")&& this.entities['action'][0].value == "Move"  && contains(this.keyEnts, "datetime",1))
        },
        'consequence': function(R) {
            if(this.entities['datetime'][0].type == 'interval'){
                startDate = new Date(this.entities['datetime'][0].from.value);
                endDate = new Date(this.entities['datetime'][0].to.value);
                this.result = 21;
                this.res.send("Ok, I've moved it.");
            }
            else{
                this.result = -1;
            }

            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'RemindersInformations' && contains(this.keyEnts, "action") && this.entities['action'][0].value == "Remove" && contains(this.keyEnts, "datetime"))
        },
        'consequence': function(R) {
            action = this.entities['action'][0].value;
            dates = parseWitDate(this.entities['datetime'][0]);
            db.removeReminders(this.res, dates.startDate, dates.endDate);
            this.result = 17;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'RemindersInformations' && contains(this.keyEnts, "reminder") && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            reminder = this.entities['reminder'][0].value;
            dates = parseWitDate(this.entities['datetime'][0]);
            db.placeReminder(this.res, reminder, dates.startDate,dates.endDate);
            this.result = 15;
            R.stop();
        }
    },

    {
        'condition' : function(R) {
            R.when(this.intent == 'RemindersInformations' && contains(this.keyEnts, "reminder"))
        },
        'consequence': function(R) {
            reminder = this.entities['reminder'][0].value;
            date = Date.now().toString();
            db.placeReminder(this.res, reminder, date, date);
            this.result = 16;
            R.stop();
        }
    },

    {
        'condition' : function(R) {
            R.when(this.intent == 'RemindersQueries' && contains(this.keyEnts, 'datetime'))
        },
        'consequence': function(R) {
            date = this.entities['datetime'][0];
            dates = parseWitDate(date);

            db.getReminders(this.res,dates.startDate, dates.endDate);
            this.result = 18;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'Repeat' && this.confidence >= 0.9)
        },
        'consequence': function(R) {
            console.log("Huh");
            this.res.send(singleton.Singleton.getInstance().lastAnswer);
            this.result = 19;
            R.stop();
        }
    },
    {
        'condition' : function(R) {
            R.when(this.intent == 'Undo' && this.confidence >= 0.69)
        },
        'consequence': function(R) {
            this.result = 20;
            this.res.send("Ok, I've reverted the action!");
            R.stop();
        }
    },
    //NO MATCH
    {
        'condition': function (R) {
            R.when(0 === 0)
        },
        'consequence': function (R) {

            if(singleton.Singleton.getInstance().missingEntities && singleton.Singleton.getInstance().missingEntities.length != 0){
                nrEntNeeded = singleton.Singleton.getInstance().missingEntities.length;
                for (var i = 0 ; i < singleton.Singleton.getInstance().missingEntities.length ; i++){
                    ent = singleton.Singleton.getInstance().missingEntities[i];
                    if(!contains(this.keyEnts, ent)){
                        break;
                    }
                    else{
                        singleton.Singleton.getInstance().context.keyEnts.push(ent);
                        singleton.Singleton.getInstance().context.entities[ent] = this.entities[ent];
                        singleton.Singleton.getInstance().context.res = this.res;
                        nrEntNeeded--;
                    }
                }
                var fact = singleton.Singleton.getInstance().context;
                if(nrEntNeeded == 0){
                    this.result = -3;
                    var newR = new RuleEngine(rules);
                    newR.execute(fact,function(result){
                        if(result.result === -1)
                            res.send("Could not understand that!");

                    });

                }
                else{
                    this.result = -1;
                }

            }
            else{
                this.result = -1;
            }

            R.stop();
        }
    }

];

var R = new RuleEngine(rules);

function match(res, data, firstOnly, expectedRuleId){
    json = JSON.parse(data);
    var outcomes = json['outcomes'];
    if(typeof(outcomes) !== 'undefined')
    for (var i = 0; i < outcomes.length; i++) {
        var outcome = outcomes[i];
        var conf = outcome['confidence'];
        var intent = outcome['intent'];
        var entities = outcome['entities'];
        var keyEnts = Object.keys(entities);
        context.keyEnts = keyEnts;
        context.entities = entities;
        context.intent = intent;
        context.confidence = conf;


        txt = intent + " [" + conf.toString() + "] :" + " " + outcome['_text'];
        txt = txt + "\n" + JSON.stringify(keyEnts) + "\n";

        var fact = {
            'intent' : intent,
            'keyEnts' : keyEnts,
            'entities' : entities,
            'confidence' : conf,
            'res' : res
        };
        lastFact = fact;
        R.execute(fact,function(result){
            if(result.result == expectedRuleId){
                console.log("TRUE," + expectedRuleId +","+ result.result + ","  + fact.intent + "," + fact.confidence + "," + outcome._text + "," + fact.keyEnts);
            }
            else{
                console.log("FALSE," + expectedRuleId +","+ result.result + "," + fact.intent + "," + fact.confidence + "," + outcome._text + "," + fact.keyEnts);
            }
            if(result.result === -1)
                res.send("Could not understand that!");
        });



    }
}

