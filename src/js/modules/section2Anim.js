export default () => {
	let images = $('.advantages-block__img');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			$(images).removeClass('unvisible');
			setTimeout(() => {
				images.css('transition', '0.5s');
				images.addClass('img-hover');
			}, 2500);
		}
	});
};
