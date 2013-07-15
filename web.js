var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   var buf=new Buffer(5);
   var fs=require("fs");
   buf=fs.readFileSync('index.html')
   var str=buf.toString("utf8");
   response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
