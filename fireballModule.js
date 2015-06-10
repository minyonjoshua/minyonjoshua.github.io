angular.module('fireballModule',[])
	.factory('imageFactory', function(){
		return {
			getImages: function(){
			return ['fireball1.jpg','fireball2.jpg'];
			}
		}
	})
	.controller('Photos', function(imageFactory){
		this.images = imageFactory.getImages();
	});