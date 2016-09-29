var express = require('express');  
// var routes = require('./routes');  
// var user = require('./routes/user');  
var http = require('http');  
var path = require('path');  
  
var app = express();  
  
// all environments  
app.use(express.static(path.join(__dirname, 'public')));  
  
app.listen(3000);

console.log('server started');
