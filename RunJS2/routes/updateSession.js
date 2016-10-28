var express = require('express');
var router = express.Router();

var updateSession = function(req, res, next) {

	if (req.session.user) {
		req.app.locals.user = req.session.user;
	}
	else{
		req.app.locals.user = null;
	}

	req.session.touch();

  	next();
};

module.exports = updateSession;
