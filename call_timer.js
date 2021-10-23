var module = require('./timer');

module.timer.on('timer', ()=>{
    
    var time = new Date();
    console.log('지금 시간은 '+time);
})