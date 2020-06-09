(function(window) {
    var helloSpeak = new Object();
    var speakWord = "Hello";
    helloSpeak.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeak = helloSpeak;
})(window);