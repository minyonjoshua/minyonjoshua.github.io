var myMod = angular.module('myMod',[]);
myMod.value('modMsg','Message from Module 1');
myMod.controller('controllerA',['$scope','modMsg',
	function($scope,msg){$scope.message = msg;}]);
	
var myApp = angular.module('myApp',['myMod']);
myApp.value('appMsg','Message from Module 2 injected with Module 1');
myApp.controller('controllerB',['$scope','appMsg',
	function($scope,msg){$scope.message = msg;}]);