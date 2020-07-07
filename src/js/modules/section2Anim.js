export default () => {
	let images = $('.advantages-block__img');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
			$(images).removeClass('unvisible');
			setTimeout(() => {
				images.css('transition', '0.5s');
			}, 2500);
		}
	});
};
