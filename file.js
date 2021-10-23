var fs = require('fs');

var data;
fs.readFile('test', 'utf-8', function(err, data){
    console.log('%s', data);
    if(err !=null){
        console.log(err);
    }
    data = data;
});

console.log("데이터는"+data);