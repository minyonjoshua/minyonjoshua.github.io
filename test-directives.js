(function(){

var test = angular.module('test-directives',[]);
	
	test.directive('testGallery', function (){
		return {
			restrict: 'A',
			templateUrl: 'dist/test-gallery.html'
		};
	});
	
	test.directive('testElement', function (){
		return {
			restrict: 'A',
			templateUrl: 'dist/test-element.html'
		};
	});
	
	test.directive('testTabs', function (){
		return {
			restrict: 'A',
			templateUrl: 'dist/test-tabs.html',
			controller: function(){
				this.tab = 0;
		
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});
	
})();