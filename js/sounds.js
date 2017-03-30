/**
 * Created by alex on 6/13/16.
 */

function playStart() {
    var audio = new Audio('./sounds/filling-your-inbox.mp3');
    audio.play();
}

function playError() {
    var audio = new Audio('./sounds/error.mp3');
    audio.play();
}

function playDone() {
    var audio = new Audio('./sounds/done.mp3');
    audio.play();
}