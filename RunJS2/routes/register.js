var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/userModel');

mongoose.connect('mongodb://localhost/runjs2');

/* GET home page. */
router.post('/', function(req, res, next) {

	console.log(req.body);

	user.save(function(err, users){
	  if (err) {
	    console.log(err);
	  };



	  res.render('login', { title: 'new user' });

	})

  
});

module.exports = router;
