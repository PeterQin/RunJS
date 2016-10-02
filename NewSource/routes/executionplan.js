var parsePlan = require('./parseplan'); 
var express = require('express');
var router = express.Router();

/* GET execution plan page. */
router.get('/', function(req, res, next) {
  res.render('executionplan', {});
});

router.post('/', function(req, res, next) {
  	var plannode = parsePlan({plannode:req.body.plan});
  	res.send(plannode);
});

module.exports = router;
