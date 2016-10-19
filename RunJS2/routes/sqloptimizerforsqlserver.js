var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
  	'sqloptimizerforsqlserver', 
  	{
  		title: 'SQL Optimizer for SQL Server',
  		navbarid: 'navbar_products',
  	});
});

module.exports = router;
