$(function() {
  'use strict';

	$(window).on('scroll', function() {
		$timeline_block.each(function() {
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	}); // end on scroll

}); // end page
