var http = require('http');
var url = require('url');
var fs = require('fs');

var mime = require('mime');

var server = http.createServer(function(req,res){
    var parseUrl = url.parse(req.url);
    var resource = parseUrl;

    //console.log(resource);
    var path = resource.pathname.split('/');
    //console.log(path[1]);
    if(path[1] =='images'){
        var images = path[2];
        console.log(mime.getType());
    }


    res.end();
});


server.listen(3002, ()=>{
    console.log('Server starts');
})
