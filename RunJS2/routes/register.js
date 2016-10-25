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
		return res.send({success:false, 
			element:'email',
			message:'email cannot be empty'});
	};

	if (!password) {
		return res.send({success:false, 
			element:'password',
			message:'password cannot be empty'});
	};

	var saveUser = function(){
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
		  res.redirect('/');

		});
	};

	UserModel.findByEmail(email, function(err, aUser){
		if (err) {
		  console.log(err);
		  return;
		};

		if (aUser) {
			res.send(
			{
				success: false, 
				message: 'Fail to register Eamil ' + email + ', because it was registered before.'
			});		
		}
		else{
			saveUser();
		}

	});  
});

module.exports = router;
