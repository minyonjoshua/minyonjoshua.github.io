angular.module('nurseryModule',[])
	.factory('imageFactory', function(){
		return {
			getImages: function(){
			return ['nursery1.jpg','nursery2.jpg','nursery3.jpg','nursery4.jpg'];
			}
		}
	})
	.controller('Photos', function(imageFactory){
		this.images = imageFactory.getImages();
	});