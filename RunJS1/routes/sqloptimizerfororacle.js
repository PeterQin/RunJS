var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
  	'sqloptimizerfororacle', 
  	{
  		title: 'SQL Optimizer for Oracle',
  		navbarid: 'navbar_products',
  	});
});

module.exports = router;
