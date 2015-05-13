angular.module('captainModule',[])
	.factory('imageFactory', function(){
		return {
			getImages: function(){
			return ['captain1.jpg','captain2.jpg','captain3.jpg','captain4.jpg',
				'captain5.jpg','captain6.jpg'];
			}
		}
	})
	.controller('Photos', function(imageFactory){
		this.images = imageFactory.getImages();
	});