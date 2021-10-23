var http = require('http');

var url = require('url');

var server = http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});
    var parseUrl = url.parse(req.url);
    
    console.log(parseUrl);

    path = parseUrl.pathname;
    
    if(path =='/my'){
        res.write('my name is alpha');
    }
    
});

server.listen(3001, ()=>{
    console.log("Server starts");

});