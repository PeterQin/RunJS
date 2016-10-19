var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sqloptimizertrails', { title: 'SQL Optimizer Free Trails', navbarid: 'navbar_sqloptimizertrails' });
});

module.exports = router;
