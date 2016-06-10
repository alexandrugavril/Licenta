/**
 * Created by alex on 6/7/16.
 */
var redis = require('redis');
var client = redis.createClient(); //creates a new client

module.exports = {
    insertMedication: insertMedication,
    getMedication: getMedication,
    getMedicalFact: getMedicalFact,
    insertMedicalFact: insertMedicalFact,
    environmentOn: environmentOn,
    environmentOff: environmentOff,
    getExercises: getExercises,
    insertExercises: insertExercises
};

client.on('connect', function() {
    console.log('connected');
});

function valueExist(value){
    return typeof(value) !== 'undefined';
}

function insertMedication(res, date, count){
    answer = "Added ";
    var medObj = new Object();
    if(typeof date !== 'undefined') {
        console.log("Have date");
        medObj.date = date;
    }
    if(typeof count !== 'undefined'){
        console.log("Have count");
        medObj.count = count;
        answer += count + " ";
    }
    answer += "medication at " + date;

    client.rpush(['medication', JSON.stringify(medObj)]);
    res.send(answer);
}

function getMedication(res, date) {
    console.log("GET MEDICATION");
    answer = "";
    dateAsked = new Date(date);
    console.log("ASKED DATE::" + dateAsked);
    client.lrange('medication',0, -1, function(err, reply) {
        console.log(reply);
        askedList = [];
        for(var i = 0 ;i < reply.length; i++){
            cMed = JSON.parse(reply[i]);
            medDate = new Date(cMed.date);
            console.log( medDate);
            if(+medDate == +dateAsked){
                askedList.push(cMed);
            }
        }

        if(askedList.length == 0){
            answer += "No, you didn't!";
        }
        else{
            answer += "Yes! You took ";
            for (var i = 0; i < askedList.length; i++){
                medObj = askedList[i];
                if(valueExist(medObj.count)){
                    answer += medObj.count + " ";
                }
                if( i == 0 ) {
                    answer += "pills at " + new Date(medObj.date).toString();
                }
                else{
                    answer += "at " + new Date(medObj.date).toString();
                }
                if(i !== askedList.length -1){
                    answer += " and ";
                }
            }
        }
        res.send(answer);
    });
}

function getMedicalFact(res, fact, date){
    console.log("GET >> " + fact + " >> " + date);
    answer = "";
    dateAsked = new Date(date);
    console.log("ASKED DATE::" + dateAsked);
    client.lrange('medical_fact',0, -1, function(err, reply) {
        console.log(reply);
        askedList = [];
        for(var i = 0 ;i < reply.length; i++){
            cMed = JSON.parse(reply[i]);
            medDate = new Date(cMed.date);
            console.log( medDate);
            if(+medDate == +dateAsked && cMed.fact == fact){
                askedList.push(cMed);
            }
        }

        if(askedList.length == 0){
            answer += "I have no information about that!";
        }
        else{
            answer += "Your " + fact + " at "  + date + " was " ;
            for (var i = 0; i < askedList.length; i++){
                medObj = askedList[i];
                if(valueExist(medObj.values)){
                    for(j = 0 ; j < medObj.values.length; j++){
                        if(j !== medObj.values.length - 1)
                            answer += medObj.values[j] + " and ";
                        else
                            answer += medObj.values[j];
                    }
                }
            }
        }
        res.send(answer);
    });
}

function insertMedicalFact(res, fact, value, date){
    answer = "Registered ";
    var medObj = new Object();

    if(typeof fact !== 'undefined'){
        console.log("Have fact");
        medObj.fact = fact;
        answer += fact + " ";
    }
    if(typeof value !== 'undefined'){
        console.log("Have value");
        medObj.values = value;
        valuesStr = value;
        answer += valuesStr + " ";
    }
    if(typeof date !== 'undefined') {
        console.log("Have date");
        medObj.date = date;
        answer += "at " + date;
    }
    client.rpush(['medical_fact', JSON.stringify(medObj)]);
    res.send(answer);
}

function getExercises(res, date) {
    console.log ("GET EXCERCISES << " + date);
    answer = "";
    dateAsked = new Date(date);
    console.log("ASKED DATE::" + dateAsked);
    client.lrange('exercises',0, -1, function(err, reply) {
        console.log(reply);
        askedList = [];
        for(var i = 0 ;i < reply.length; i++){
            cMed = JSON.parse(reply[i]);
            medDate = new Date(cMed.date);
            console.log( medDate);
            if(+medDate == +dateAsked){
                askedList.push(cMed);
            }
        }

        if(askedList.length == 0){
            answer += "I have no information about that!";
        }
        else{
            for (var i = 0; i < askedList.length; i++){
                exObj = askedList[i];
                answer += "You exercised at " + exObj.date + " ";
                if(valueExist( exObj.duration)){
                    answer += "for " + secondsToText(exObj.duration);
                }
                answer += "\n";
            }
        }
        res.send(answer);
    });

}

function secondsToText(value){
    return value + " " + "seconds";
}

function insertExercises(res, date, duration){
    console.log ("GET EXCERCISES << " + date + "<< " + duration);

    answer = "You exercised at ";
    var medObj = new Object();

    if(typeof date !== 'undefined'){
        console.log("Have date");
        medObj.date = date;
        answer += date + " ";
    }
    else{
        res.send("The information you provided is invalid.")
        return;
    }
    if(typeof duration !== 'undefined'){
        console.log("Have duration");
        medObj.duration = duration;
        answer += "for " + secondsToText(duration) + " ";
    }
    client.rpush(['exercises', JSON.stringify(medObj)]);
    res.send(answer);

}

function environmentOn(res, entity){
    answer = "I'm sorry. I didn't understand that...";
    if(entity == 'air-conditioning'){
        answer = "Turned on the air-conditioning";
    }
    else if(entity == 'blinds'){
        answer = "Raised the blinds";
    }
    else if(entity == 'light'){
        answer = "Turned on the lights";
    }
    res.send(answer);
}

function environmentOff(res, entity){
    answer = "I'm sorry. I didn't understand that...";
    entity.replace('-', ' ');
    if(entity == 'air conditioning'){
        answer = "Turned off the air-conditioning";
    }
    else if(entity == 'blinds'){
        answer = "Lowered the blinds";
    }
    else if(entity == 'light'){
        answer = "Turned off the lights";
    }
    res.send(answer);
}