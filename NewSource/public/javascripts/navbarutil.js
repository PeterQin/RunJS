function SelectNavBarItem(navbarid){
	$(document).ready(function () {
		$('ul.nav > li').removeClass('active');
		$('#'+navbarid).toggleClass('active');
	});
};

define(function(require, exports) {

  	exports.SelectNavBarItem = function(navbarid){
		SelectNavBarItem(navbarid);
	};

});