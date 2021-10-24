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
        var images = 'images/'+path[2];
        console.log(images);
        console.log(mime.getType(images));
    
        fs.readFile(images, function(err, data){
            if(err){
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('error');
                console.log(err);
            }else{
                res.end(data);
            }
        });
    }else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('404 not found');
    }

});


server.listen(3002, ()=>{
    console.log('Server starts');
})
