var events = require('events');

var emitter = new events();

emitter.on('call', ()=>{
    console.log('called events');
});

emitter.emit('call');

var events = require('events');

var emitter = new events();

emitter.on('time', ()=>{
    console.log('time함수 on');
});

emitter.emit('time');