var http = require('http');
var numbers = require('./numbers');

var server = http.createServer(function(req, res){
    console.log('server starts');

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello Alpha great man');
});

server.listen(3001, ()=>{
    console.log("server is running");
    numbers.numbers();
});