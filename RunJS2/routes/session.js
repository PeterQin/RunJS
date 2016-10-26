var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	req.session.lastPage = req.originalUrl;
	req.app.locals.user = req.session.user;
  	next();
});

module.exports = router;
