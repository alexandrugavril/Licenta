/**
 * Created by alex on 6/7/16.
 */
var redis = require('redis');
var client = redis.createClient(); //creates a new client
var NONE = "NONE";
singleton = require('./singleton.js');



module.exports = {
    insertMedication: insertMedication,
    getMedication: getMedication,
    getMedicalFact: getMedicalFact,
    insertMedicalFact: insertMedicalFact,
    environmentOn: environmentOn,
    environmentOff: environmentOff,
    getExercises: getExercises,
    insertExercises: insertExercises,
    placeReminder: placeReminder,
    getReminders: getReminders,
    removeReminders: removeReminders,
    getHeartRate: getHeartRate
};

client.on('connect', function() {
    console.log('connected');
});

function valueExist(value){
    return typeof(value) !== 'undefined';
}

function calculateFunction(mathFunc, list){
    if(mathFunc == 'mean'){
        sum = 0.0;
        for(var i = 0; i < list.length; i++){
            sum = sum + list[i];
        }
        return sum / list.length;
    }
    if(mathFunc == 'minimum'){
        min = 999999;
        for (var i = 0 ; i < list.length; i++){
            if(list[i] < min){
                min = list[i];
            }
        }
        return min;
    }
    if(mathFunc == 'maximum'){
        max = 0;
        for (var i = 0 ; i < list.length; i++){
            if(list[i] > max){
                max = list[i];
            }
        }
        return max;
    }
    return -1;
}

var options = {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
};

function insertMedication(res, date,endDate, count){

    answer = "Added ";
    var medObj = new Object();
    date = new Date(date);
    endDate = new Date(endDate);
    if(typeof date !== 'undefined') {
        medObj.date = date;
    }
    if(typeof endDate !== 'undefined'){
        medObj.endDate = endDate;
    }
    if(typeof count !== 'undefined'){
        medObj.count = count;
        answer += count + " ";
    }
    answer += "medication at " + date.toUTCString();

    client.rpush(['medication', JSON.stringify(medObj)]);
    res.send(answer);
    singleton.Singleton.getInstance().lastAnswer = answer;
}

function getMedication(res, date, asJson, eDate) {
    answer = "";
    startDateQ = new Date(date);
    endDateQ = new Date(eDate);
    client.lrange('medication',0, -1, function(err, reply) {
        askedList = [];
        jsonReply = [];
        for(var i = 0 ;i < reply.length; i++){
            cMed = JSON.parse(reply[i]);
            jsonReply.push(cMed);
            startDateI = new Date(cMed.date);
            if(valueExist(cMed.endDate)){
                endDateI = new Date(cMed.endDate);
                if(startDateQ <= startDateI && startDateI <= endDateQ && endDateI <= endDateQ && endDateI >= startDateQ ){
                    askedList.push(cMed);
                }
            }
            else {
                if (+startDateI == +startDateQ) {
                    askedList.push(cMed);
                }
            }
        }
        if(valueExist(asJson) && asJson === true){
            res.send(jsonReply);
            return;
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
                var dataNow = new Date(medObj.date);
                if( i == 0 ) {
                    answer += "pills at " + dataNow.toUTCString();
                    console.log(dataNow.toLocaleString('en-us', options));
                }
                else{

                    answer += "at " + dataNow.toUTCString();
                    console.log()
                }
                if(i !== askedList.length -1){
                    answer += " and ";
                }
            }
        }
        res.send(answer);
        singleton.Singleton.getInstance().lastAnswer = answer;

    });
    }
function getHeartRate(res, date,endDate, mathFunction){
    startDateQ = new Date(date);
    startDateQ.setHours(0);
    startDateQ.setMinutes(0);
    startDateQ.setSeconds(0);

    endDateQ = new Date(date);
    endDateQ.setHours(23);
    endDateQ.setMinutes(59);
    endDateQ.setSeconds(59);
    var fact = "heart rate";

    client.lrange('medical_fact',0, -1, function(err, reply) {
        askedList = [];
        for (var i = 0; i < reply.length; i++) {
            cMed = JSON.parse(reply[i]);
            askedList.push(cMed);
            console.log(JSON.stringify(cMed));
        }
        console.log(askedList.length);
        res.send(askedList);
    });
}

function getMedicalFact(res, fact, date, endDate, mathFunction){
    answer = "";
    startDateQ = new Date(date);
    endDateQ = new Date(endDate);

    client.lrange('medical_fact',0, -1, function(err, reply) {
        askedList = [];
        for(var i = 0 ;i < reply.length; i++){
            cMed = JSON.parse(reply[i]);
            startDateI = new Date(cMed.date);
            if(valueExist(cMed.endDate)){
                endDateI = new Date(cMed.endDate);
                if(fact == cMed.fact && startDateQ <= startDateI && startDateI <= endDateQ && endDateI <= endDateQ && endDateI >= startDateQ ){
                    askedList.push(cMed);
                }
            }
            else {
                if (+startDateI == +startDateQ) {
                    askedList.push(cMed);
                }
            }
        }
        if(askedList.length == 0){
            answer += "I have no information about that!";
        }
        if(valueExist(mathFunction) && mathFunction != NONE && fact != "blood pressure"){
            answer = "Your " + mathFunction + " " + fact + " at " + date.toUTCString() + " was ";
            list = [];

            for(var i =0 ;i < askedList.length; i++){
                for(var j = 0; j < askedList[i].values.length; j++){
                    list.push(askedList[i].values[j]);
                }
            }

            rez = calculateFunction(mathFunction, list);
            answer += rez.toString();
            res.send(answer);
            return;
        }
        else{
            answer += "Your " + fact + " at "  + startDateQ.toString() + " was " ;
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
        singleton.Singleton.getInstance().lastAnswer = answer;

    });
}

function placeReminder(res, reminder, date, endDate){
    answer = "Place reminder to: " + reminder + " at " + date.toString();
    var rem = new Object();
    rem.reminder = reminder;
    rem.date = date;
    rem.endDate = endDate;
    client.rpush(['reminder', JSON.stringify(rem)]);
    res.send(answer);
    singleton.Singleton.getInstance().lastAnswer = answer;

}

function removeReminders(res, date,endDate){
    res.send("OK");
}


function getReminders(res, date, endDate){
    remList = [];
    startDateQ = new Date(date);
    endDateQ = new Date(endDate);
    client.lrange('reminder',0, -1, function(err, reply) {
        for(var i = 0 ;i < reply.length; i++) {
            cMed = JSON.parse(reply[i]);
            startDateI = new Date(cMed.date);
            endDateI = new Date(cMed.endDate);
            if (startDateQ <= startDateI && startDateI <= endDateQ && endDateI <= endDateQ && endDateI >= startDateQ) {
                remList.push(cMed);
            }
        }
        res.send(remList);
        singleton.Singleton.getInstance().lastAnswer = remList;

    });
}

function insertMedicalFact(res, fact, value, date, endDate){
    answer = "Registered ";
    var medObj = new Object();
    if(typeof fact !== 'undefined'){
        medObj.fact = fact;
        answer += fact + " ";
    }
    if(typeof value !== 'undefined'){
        medObj.values = value;
        valuesStr = value;
        answer += valuesStr + " ";
    }
    if(valueExist(endDate)){
        medObj.endDate = endDate;
    }
    if(typeof date !== 'undefined') {
        medObj.date = date;
        answer += "at " + new Date(date).toUTCString();
    }
    client.rpush(['medical_fact', JSON.stringify(medObj)]);
    res.send(answer);
    singleton.Singleton.getInstance().lastAnswer = answer;

}

function getExercises(res, date, asJson) {
    answer = "";
    dateAsked = new Date(date);
    client.lrange('exercises',0, -1, function(err, reply) {
        askedList = [];
        jsonReply = [];
        for(var i = 0 ;i < reply.length; i++){
            cMed = JSON.parse(reply[i]);
            jsonReply.push(cMed);
            medDate = new Date(cMed.date);
            if(+medDate == +dateAsked){
                askedList.push(cMed);
            }
        }
        if(valueExist(asJson) && asJson == true){
            res.send(jsonReply);
            return;
        }
        if(askedList.length == 0){
            answer += "I have no information about that!";
        }
        else{
            for (var i = 0; i < askedList.length; i++){
                exObj = askedList[i];
                answer += "You exercised at " + new Date(exObj.date).toUTCString() + " ";
                if(valueExist( exObj.duration)){
                    answer += "for " + secondsToText(exObj.duration);
                }
                answer += "\n";
            }
        }
        res.send(answer);
        singleton.Singleton.getInstance().lastAnswer = answer;

    });

}

function secondsToText(value){
    return value + " " + "seconds";
}

function insertExercises(res, date, duration){
    answer = "You exercised at ";
    var medObj = new Object();

    if(typeof date !== 'undefined'){
        medObj.date = date;
        answer += new Date(date).toUTCString() + " ";
    }
    else{
        res.send("The information you provided is invalid.");
        return;
    }
    if(typeof duration !== 'undefined'){
        medObj.duration = duration;
        answer += "for " + secondsToText(duration) + " ";
    }
    client.rpush(['exercises', JSON.stringify(medObj)]);
    res.send(answer);
    singleton.Singleton.getInstance().lastAnswer = answer;


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
    singleton.Singleton.getInstance().lastAnswer = answer;

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
    singleton.Singleton.getInstance().lastAnswer = answer;

}

