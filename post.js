var http = require('http');
var qs = require('querystring');

var server = http.createServer(function(req,res){
    var body = '';
    req.setEncoding('utf-8');
    req.on('data', function (data) {
        body += data;   // post 방식으로 받은 데이터들이 query string 형식의 문자열 형태로 출력이 된다.
        dataObj = qs.parse(body);   // 문자열을 JSON Obj형식으로 변환
    });
    req.on('end', function () {
        var name = dataObj.name;
        var content = dataObj.content;

        res.end(name);
    });    
});

server.listen(3002, function(){
    console.log('Server is running...');
});