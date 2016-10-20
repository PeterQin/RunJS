var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/userModel');


/* GET home page. */
router.get('/', function(req, res, next) {

  user.fetch(function(err, users){
    if (err) {
      console.log(err);
    };

    res.render('userlist', 
      { 
        title: 'User Management',
        userlist: users, 
      }
    );

  })

	
    
});

module.exports = router;
