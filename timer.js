var event = require('events');

exports.timer = new event();

var sec = 1;

setInterval(function(){
    exports.timer.emit('timer');
}, sec*1000);