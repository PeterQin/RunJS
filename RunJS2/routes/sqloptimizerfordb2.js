var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
  	'sqloptimizerfordb2', 
  	{
  		title: 'SQL Optimizer for DB2',
  		navbarid: 'navbar_products',
  	});
});

module.exports = router;
