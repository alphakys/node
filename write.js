var fs = require('fs');

var data = '';

fs.writeFile('권은진 사랑해',data, 'utf-8', function(err){
    if(err){
        console.log(err);
    }
});