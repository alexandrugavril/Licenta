/**
 * Created by alex on 6/25/16.
 */
var Singleton = (function () {
    var instance;
    var context;
    var lastAnswer;

    function createInstance() {
        var object = new Object();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
                instance.lastAnswer = "I don't recall saying anything!";
            }
            return instance;
        }
    };
})();

module.exports = {
    Singleton: Singleton
};