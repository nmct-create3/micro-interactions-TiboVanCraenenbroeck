let domRatingInputs, domRatingSymbols;
const showRating = function(ratingItemSelected) {
	console.log(ratingItemSelected.value);
	for (const [itemKey, itemRatingInput] of Object.entries(domRatingInputs)) {
		console.log(domRatingSymbols[itemKey]);
		// Controleer of de value kleiner of gelijk is aan de geselecteerde waarde
		if (itemRatingInput.value < ratingItemSelected.value) {
			//itemRatingInput.classList.toggle('c-rating--checked');
			domRatingSymbols[itemKey].classList.add('c-rating--checked');
		} else {
			domRatingSymbols[itemKey].classList.remove('c-rating--checked');
		}
	}
};
const addEventListeners = function() {
	for (const itemRatingInput of domRatingInputs) {
		itemRatingInput.addEventListener('change', function() {
			showRating(itemRatingInput);
		});
	}
};
const getRatingInputs = function() {
	domRatingInputs = document.querySelectorAll('.js-input--radio');
	domRatingSymbols = document.querySelectorAll('.js-rating__symbol');
	addEventListeners();
};
document.addEventListener('DOMContentLoaded', function() {
	console.log('😎');
	getRatingInputs();
});
