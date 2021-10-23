var http = require('http');

var url = require('url');



var server = http.createServer(function(req,res){
    console.log('Server starts');
    
    var reqUrl = url.parse(req.url);
    var querystring = new URLSearchParams(reqUrl.search);

    var query = querystring.get('name');

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(query); 

});

server.listen(3002, ()=>{
    console.log('server is running');
})