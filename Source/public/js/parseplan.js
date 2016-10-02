function InitParsePlan(goUtil){
	var successCallbackFunc = function(data){
		var jsonNodeArray = JSON.parse(data.plannode);
		goUtil.InitDiagram();
		goUtil.RebuildGraph(jsonNodeArray);
	};

	var onSubmit = function(event){
		// Stop form from submitting normally
		event.preventDefault();
		
		// Get some values from elements on the page:
		var $form = $( this );
		var inputdata = $form.find( "textarea[id='textinput']" ).val();
		var url = $form.attr( "action" );
		
		// Send the data using post
		var posting = $.post( url,{plan:inputdata});
		
		// Put the results in a div
		posting.done(successCallbackFunc);
	};

	$('#submitForm').submit(onSubmit);
}


define(function(require, exports) {
	var goUtil = require('goutil');

  	exports.InitParsePlan = function(){
		InitParsePlan(goUtil);
	};

});