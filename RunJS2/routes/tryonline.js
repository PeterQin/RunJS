var express = require('express');
var router = express.Router();
var parsePlan = require('../business/parseplan'); 
var mailer = require('../business/mail'); 

/* GET try online page. */
router.get('/', function(req, res, next) {

	mailer.sendMail();

  res.render('tryonline', { title: 'Try Online'});
});

router.post('/', function(req, res, next) {
  	parsePlan(req.body.plan, function(data){
  		res.send(data);
  	});
  	
});

module.exports = router;
