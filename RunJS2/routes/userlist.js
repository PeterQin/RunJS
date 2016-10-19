var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var userlist = [
        { id: '1', user: 'Bloody', password:'sss', alias:'', createdTime:'2016-01-01', updatedTime:'2016-01-01' },
        { id: '2', user: 'Bloody', password:'sss', alias:'', createdTime:'2016-01-01', updatedTime:'2016-01-01' },
    ];
  res.render('userlist', 
  	{ 
  		title: 'User Management',
  		userlist: userlist, 
  	}
  	);
});

module.exports = router;
