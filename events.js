var event = require('events');

var emit = new event();

emit.on('call', ()=>{
    console.log('called events');
})

emit.emit('call');



process.on('out', function(time){
    console.log('', time);
});

setTimeout(function(){
    console.log('2초 이후 이벤트 종료');

    process.emit('out', 2);
}, 2000);