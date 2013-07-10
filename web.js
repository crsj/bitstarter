
var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

	var indexfile = "/home/ubuntu/week3/hw3ProgAssn/bitstarter/index.html";
	var indexdata = fs.readFileSync(indexfile) + ' ';
	//console.log("data " + __filename + "\n Wrote: " + indexdata);
  response.send(indexdata);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




