var express = require('express');
var path = require('path');

var app = express.createServer(express.logger());

var fs = require('fs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(request, response) {
  
  var buffer = fs.readFileSync('index.html');
   	
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
