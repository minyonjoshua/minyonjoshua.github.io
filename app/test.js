
(function(){

var test = angular.module('test',['test-directives']);

	test.controller('galleryController', ['$http',function($http){
		
		var gallery = this;
		
		gallery.items = [];
		
		$http.get('test.json').success(function(data){
			
			gallery.items = data;
			
		});
		
	}]);
	
})();