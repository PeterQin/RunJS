var express = require('express');
var router = express.Router();
var UserModel = require('../models/usermodel');

/* GET home page. */
router.get('/', function(req, res, next) {
	var id = req.query.id;

	UserModel.findById(id, function(err, aUser){
		if (err) {
			console.log(err);
		};
		console.log(aUser);
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
