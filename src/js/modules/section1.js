export default () => {
	let selects = $('.form-input-block__select'),
		selectItem = $('.select-item');

	selects.click(function (e) {
		$(this).children('.select__icon').toggleClass('select__icon_active');
		$(this).children('.select__body').slideToggle();
	});

	selectItem.each((index, item) => {
		let currentIcon = $(item)
				.parents('.form-input-block__select')
				.children('.select__header')
				.children('.select__current')
				.children('.select-item-current')
				.children('img'),
			currentText = $(item)
				.parents('.form-input-block__select')
				.children('.select__header')
				.children('.select__current')
				.children('.select-item-current')
				.children('span');

		$(item).click(function (e) {
			currentIcon.attr('src', $(this).children('img').attr('src'));
			currentText.text($(this).children('span').text());
			countValue();
		});
	});

	let firstInput = $('.form-input-block:first input'),
		lastInput = $('.form-input-block:last input');
	firstInput.change(function (e) {
		e.preventDefault();
		countValue();
	});

	function countValue() {
		let firstSelect = $('.select-item-current:first span'),
			lastSelect = $('.select-item-current:last span'),
			firstInputVal = +firstInput.val(),
			firstValue = 0,
			lastValue = 0;

		let rub = 1,
			usd = 69,
			eur = 73;
		if (firstSelect.text() == 'RUB') {
			firstValue = rub;
		} else if (firstSelect.text() == 'USD') {
			firstValue = usd;
		} else if (firstSelect.text() == 'EUR') {
			firstValue = eur;
		}
		if (lastSelect.text() == 'RUB') {
			lastValue = rub;
		} else if (lastSelect.text() == 'USD') {
			lastValue = usd;
		} else if (lastSelect.text() == 'EUR') {
			lastValue = eur;
		}

		lastInput.val(((firstInputVal / lastValue) * firstValue).toFixed(2));
	}
	countValue();
};
