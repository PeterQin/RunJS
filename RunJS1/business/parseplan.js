var parsePlan = function(plan, callback){
	//TODO: should call parse server via http
	if (plan === '') {
		var request = require('request');
		var url = "http://localhost:8080/HelloServlet/Servlet1";
		request(url, function (error, response, body) {
			
		  if (!error && response.statusCode == 200) {
		  	
		    return callback({plannode:body});
		  }
		});

	}
	else{		
		return callback({plannode:plan});
	}
}

module.exports = parsePlan;