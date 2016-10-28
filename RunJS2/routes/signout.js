var express = require('express');
var debug = require('debug')('runjs2:signout');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	debug('------------------------');
	debug('session sign out: %s', req.session.user.email);
	debug('------------------------');

	req.app.locals.user = null;
	req.session.destroy(function(err){
		if (err) {
			debug('destroy session fail: %s', err);
		};		
	});
	
  	res.redirect('/');
});

module.exports = router;
