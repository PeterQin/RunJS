var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	delete req.session.user;
	req.app.locals.user = null;
  	res.redirect('/');
});

module.exports = router;