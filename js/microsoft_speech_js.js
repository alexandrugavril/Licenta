/**
 * Created by alex on 6/13/16.
 */
var client;
var request;

function useMic() {
    return true;
}

function getMode() {
    return Microsoft.ProjectOxford.SpeechRecognition.SpeechRecognitionMode.longDictation;
}

function getOxfordKey() {
    return "c3cece936e95450eb95b7d18dd371bf9";
}

function getSecondaryOxfordKey() {
    return "ab61d10498274872bd6c493bebdf153d";
}

function getLanguage() {
    return "en-us";
}

function getLuisConfig() {
    var appid = "9e9c32b0-4496-48b5-9a0b-0342511e3d4c";
    var subid = "310de3dce0964707bbe019b877553fed";
    console.log("Called");

    if (appid.length > 0 && subid.length > 0) {
        console.log("LUIS?");
        return { appid: appid, subid: subid };
    }

    return null;
}

function start() {
    var mode = getMode();
    var luisCfg = getLuisConfig();

    clearText();

    if (useMic()) {
        if (luisCfg) {
            client = Microsoft.ProjectOxford.SpeechRecognition.SpeechRecognitionServiceFactory.createMicrophoneClientWithIntent(
                getLanguage(),
                getOxfordKey(),
                getSecondaryOxfordKey(),
                luisCfg.appid,
                luisCfg.subid);
        } else {
            client = Microsoft.ProjectOxford.SpeechRecognition.SpeechRecognitionServiceFactory.createMicrophoneClient(
                mode,
                getLanguage(),
                getOxfordKey(),
                getSecondaryOxfordKey());
        }
        client.startMicAndRecognition();
        console.log("Started?");
        setTimeout(function () {
            console.log("Ended?");
            client.endMicAndRecognition();
        }, 5000);
    } else {
        if (luisCfg) {
            client = Microsoft.ProjectOxford.SpeechRecognition.SpeechRecognitionServiceFactory.createDataClientWithIntent(
                getLanguage(),
                getOxfordKey(),
                getSecondaryOxfordKey(),
                luisCfg.appid,
                luisCfg.subid);
        } else {
            client = Microsoft.ProjectOxford.SpeechRecognition.SpeechRecognitionServiceFactory.createDataClient(
                mode,
                getLanguage(),
                getOxfordKey(),
                getSecondaryOxfordKey());
        }
        request = new XMLHttpRequest();
        request.open(
            'GET',
            (mode == Microsoft.ProjectOxford.SpeechRecognition.SpeechRecognitionMode.shortPhrase) ? "whatstheweatherlike.wav" : "batman.wav",
            true);
        request.responseType = 'arraybuffer';
        request.onload = function () {
            if (request.status !== 200) {
                setText("unable to receive audio file");
            } else {
                client.sendAudio(request.response, request.response.length);
            }
        };

        request.send();
    }

    client.onPartialResponseReceived = function (response) {
        console.log(response);
        setText(response);
    };

    client.onFinalResponseReceived = function (response) {
        console.log(response);



        $.ajax({
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(response),
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: '/message'
        }).done(function(data) {
            console.log(data);
        });



        console.log("EMMITED");
    };

    client.onIntentReceived = function (response) {
        console.log(response);
        var json = JSON.parse(response);
        var intents = json['intents'];
        var bestIntent = intents[0];
        setText("#" + bestIntent['intent']);setText(': '); setText(json['query']);


        socket.emit ('speechSend', response);
        console.log("EMMITED");
    };
}
