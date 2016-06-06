/**
 * Created by alex on 6/6/16.
 */
var witToken = "NCMMPEGNNKEMYXOFPK7ELRCGYBS4G56M";
var entities = [];

exports.getEntities = function(req, res){
    $.ajax({
        url: "https://api.wit.ai/entities",
        data: {
            "v":20160526
        },
        type: "GET",
        success: function(data, status) {
            console.log(JSON.stringify(data));
            entities = data;
        },
        beforeSend: function(xhr, settings) { xhr.setRequestHeader('Authorization','Bearer ' + witToken); }
    });
};

exports.match = function(req, res) {
    console.log(JSON.stringify(req.body));
    var text = req.body['display'];
    var confidence = req.body['confidence'];
    var intent = req.body['intent'];
    var entities = req.body['entities'];
};

exports.getMedication =  function(req,res) {
    console.log(JSON.stringify(req.body));
    var intent = req.body['intent'];
    var entities = req.body['entities'];


};