var module = require('./timer');

module.timer.on('time', function(time){
    var time = new Date();
    console.log('now:'+time);
});

var module = require('./timer');

module.timer.on('time', function(time){
    var time = new Date();
    console.log(time);
})