var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   var buf=new Buffer(5);
   var fs=require("fs");
   fs.readFileSync('index.html', function read(err,data)
     {
      if (err) {
        throw err;
        }
       buf=data;    
      });
  var str=buf.toString("utf-8");
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
