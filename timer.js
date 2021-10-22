var events = require('events');

var sec = 1;

exports.timer = new events();

setInterval(function(){
    exports.timer.emit('time');
}, sec*1000);