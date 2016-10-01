var express = require('express');  
// var routes = require('./routes');  
// var user = require('./routes/user'); 
var bodyParser = require('body-parser'); 
var http = require('http');  
var path = require('path');  
var parsePlan = require('./dispatch'); 

var app = express();

// all environments  
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));  

app.post('/plan', function (req, res) {	
	var plannode = parsePlan({plannode:req.body.plan});
  	res.send(plannode);
});

var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

