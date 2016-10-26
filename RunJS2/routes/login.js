var express = require('express');
var router = express.Router();
var UserModel = require('../models/usermodel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', function(req, res, next) {
	var requestUser = req.body.user;
	var email = requestUser.email;
	var password = requestUser.password;

	if (!email) {
		return res.send({fail: true, 
			element:'email',
			message:'email cannot be empty'});
	};

	if (!password) {
		return res.send({fail: true, 
			element:'password',
			message:'password cannot be empty'});
	};

	UserModel.findByEmail(email, function(err, aUser){
		if (err) {
		  console.log(err);
		  return;
		};

		if (aUser) {
			aUser.comparePassword(password, function(err, aIsMatched){
				if (err) {
				  console.log(err);
				  return;
				};
				if (aIsMatched) {
					req.session.user = aUser;
					res.redirect(req.session.lastPage);
				}
				else{
					return res.send(
					{
						fail: true, 
						message: 'Password is incorrect'
					});
				}
			})
		}
		else{
			return res.send(
			{
				fail: true, 
				message: 'Email ' + email + ' is not register'
			});
		}

	});

});

module.exports = router;
