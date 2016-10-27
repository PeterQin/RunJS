var express = require('express');
var router = express.Router();

const POST_SIGNIN_URI = '/user/signin';

var updateSession = function(req, res, next) {

	if (req.session.user) {
		req.app.locals.user = req.session.user;
	}
	else{
		req.app.locals.user = null;
	}

	req.session._garbage = Date();
	req.session.touch();

  	next();
};

module.exports = updateSession;
