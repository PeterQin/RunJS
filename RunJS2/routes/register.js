var express = require('express');
var router = express.Router();
var UserModel = require('../models/usermodel');

/* GET home page. */
router.get('/', function(req, res, next) {

	res.render('register', { title: 'register' });
  
});

router.post('/', function(req, res, next) {
	var requestUser = req.body.user;
	var email = requestUser.email;
	var userName = requestUser.userName;
	var password = requestUser.password;

	if (!email) {
		res.send({success:false, 
			element:'email',
			message:'email cannot be empty'});
	};

	if (!password) {
		res.send({success:false, 
			element:'password',
			message:'password cannot be empty'});
	};

	UserModel.findByEmail(email, function(err, aUser){
		if (err) {
		  console.log(err);
		};

		if (aUser) {
			res.send({success: false, 
				message: 'Fail to register Eamil ' + email + ', because it was registered before.'});
		};
	});

	console.log(foundUser);
	return;

	var newUserModel = new UserModel(
		{
			email: email, 
			userName: userName, 
			password: password
		});

	newUserModel.save(function(err, aUser){
	  if (err) {
	    console.log(err);
	  };
	  res.redirect('/user?id=' + aUser._id);

	});

  
});

module.exports = router;
