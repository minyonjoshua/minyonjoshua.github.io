angular.module('beamModule',[])
	.factory('imageFactory', function(){
		return {
			getImages: function(){
			return ['beam1.jpg','beam2.jpg','beam3.jpg','beam4.jpg',
				'beam5.jpg','beam6.jpg','beam7.jpg','beam8.jpg',
				'beam9.jpg','beam10.jpg','beam11.jpg','beam12.jpg',
				'beam13.jpg','beam14.jpg','beam15.jpg','beam16.jpg'];
			}
		}
	})
	.controller('Photos', function(imageFactory){
		this.images = imageFactory.getImages();
	});