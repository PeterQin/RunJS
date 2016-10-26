var express = require('express');
var router = express.Router();
var UserModel = require('../models/usermodel');

/* GET home page. */
router.get('/', function(req, res, next) {
	var user = req.session.user;
	var id = user._id;

	UserModel.findById(id, function(err, aUser){
		if (err) {
			console.log(err);
		};
		
		res.render('user', 
		{ 
			title: 'My Settings',
			user: aUser
		 });
	})
  
});

router.post('/', function(req, res, next) {

	res.send('will save');

});

module.exports = router;
