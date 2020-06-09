(function(window) {
    var byeSpeak = new Object();
    var speakWord = "Good Bye";
    byeSpeak.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeak = byeSpeak;
})(window);