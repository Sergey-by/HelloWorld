$(function() {
	if (typeof currentPage === 'undefined') {
	    currentPage = 'blank';
	}
	var GALLERY_IMAGE_CONTAINER = '<div class="gallery-image-contaier"></div>';
	$(window).scroll(function() {
		if($(window).scrollTop() > 0) {
			$('body').addClass('scrolling');
		} else {
			$('body').removeClass('scrolling');
		}
	});
	$("#image-as-is").on('load', function(){
		$('.image-contaier-wrapper').addClass('image-loaded');
	});
	$('.gallery-item').on('click', function(){
		var imagePath = $(this).children('img').attr('src');
		var fullImagePath = imagePath.replace('/promo_gallery/', '/promo_gallery/full_size/');
		$("#gallery-image-contaier").fadeIn(300, function() {
			$('#image-as-is').attr('src', fullImagePath);
		});
	// var imgPreload = new Image();
	 //    $(imgPreload).attr({
	 //        src: photoUrl
	 //    });

	 //    //check if the image is already loaded (cached):
	 //    if (imgPreload.complete || imgPreload.readyState === 4) {

	 //        //image loaded:
	 //        //your code here to insert image into page

	 //    } else {
	 //        //go fetch the image:
	 //        $(imgPreload).load(function (response, status, xhr) {
	 //            if (status == 'error') {

	 //                //image could not be loaded:

	 //            } else {

	 //                //image loaded:
	 //                //your code here to insert image into page

	 //            }
	 //        });
	 //    }
	});
	$('.close-button').on('click', function(){	
		$(".gallery-image-contaier").fadeOut(300, function(){
			$('.image-contaier-wrapper').removeClass('active');
			$('#image-as-is').attr('src', '');
		});
	});
	if(currentPage == 'index'){
		//showPopup('vote-me-popup');
	}
});

var showPopup = function(popupId){
	$('body').addClass('no-scroll');
	$('#' + popupId).css('top', $(window).scrollTop());
	$('#' + popupId).fadeIn(200, function(){
		$('#popup-close-button').on('click', function(){
			$('body').removeClass('no-scroll');
			$('#' + popupId).fadeOut(200);
		});
	});
	
};