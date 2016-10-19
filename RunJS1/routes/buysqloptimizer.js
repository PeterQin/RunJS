var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('buysqloptimizer', { title: 'Buy SQL Optimizer', navbarid: 'navbar_buysqloptimizer' });
});

module.exports = router;
