export default () => {
	const button = $('#header-profile-btn'),
		block = $('#header-profile-block');

	button.click(() => {
		block.slideToggle();
	});

	$(window).resize(function () {
		if (window.innerWidth >= 768) {
			block.css('display', '');
		}
	});
};
