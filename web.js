var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var fs = require('fs');
 var fname = fs.readFileSync("index.html");
 var buf = new Buffer(fname);
 buf.toString('utf8', 0, buf.length);

response.send(fname.toString('utf8'));

}); 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
