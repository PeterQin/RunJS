var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loginsqloptimizer', { title: 'Login SQL Optimizer', navbarid: 'navbar_loginsqloptimizer' });
});

module.exports = router;
