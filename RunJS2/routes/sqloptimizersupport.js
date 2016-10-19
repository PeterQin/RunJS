var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sqloptimizersupport', { title: 'SQL Optimizer Support', navbarid: 'navbar_sqloptimizersupport' });
});

module.exports = router;
