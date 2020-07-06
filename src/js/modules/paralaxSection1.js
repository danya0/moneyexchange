export default () => {
	$(window).bind('scroll', function (e) {
		parallaxScroll();
	});

	function parallaxScroll() {
		let scrolled = $(window).scrollTop();
		$('.section1-bg').css('top', 0 - scrolled * 0.25 + 'px');

		if (scrolled > 1000) {
			$('.section1-bg').css('top', '');
		}
	}
};
