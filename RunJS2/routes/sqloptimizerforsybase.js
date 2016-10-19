var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
  	'sqloptimizerforsybase', 
  	{
  		title: 'SQL Optimizer for Sybase',
  		navbarid: 'navbar_products',
  	});
});

module.exports = router;
