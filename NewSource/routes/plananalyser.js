var parsePlan = require('../business/parseplan'); 
var express = require('express');
var router = express.Router();

/* GET plan analyser page. */
router.get('/', function(req, res, next) {
  res.render(
  	'plananalyser', 
  	{
  		title: 'Plan Analyser',
  		navbarid: 'navbar_plananalyser',
  	});
});

router.post('/', function(req, res, next) {
  	parsePlan(req.body.plan, function(data){
  		res.send(data);
  	});
  	
});

module.exports = router;
