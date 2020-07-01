export default () => {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow:
			'<div class="slider-arrow slider-arrow-prev"> <div class="slider-arrow__line slider-arrow-prev__line"></div> </div>',
		nextArrow:
			'<div class="slider-arrow slider-arrow-next"> <div class="slider-arrow__line slider-arrow-next__line"></div> </div>',
		responsive: [
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
					autoplay: true,
					autoplaySpeed: 7000,
				},
			},
		],
	});

	$('.slider-arrow-prev').mouseover(() => {
		$('.slider-arrow-next__line').addClass('slider-arrow-next__line_small');
	});
	$('.slider-arrow-prev').mouseout(() => {
		$('.slider-arrow-next__line').removeClass(
			'slider-arrow-next__line_small'
		);
	});
};
