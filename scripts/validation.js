let email = {},
	password = {},
	signButton;
// Checkt of het een geldig e-mailadres is.
const isValidEmailAddress = function(emailAddress) {
	// Basis manier om e-mailadres te checken.
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};
const isValidPassword = function(password) {
	/*if (password.length > 0) {
		console.log('true');
		return true;
	} else {
		console.log('false');
		return false;
	}*/
	return password.length > 2;
};
// Checkt of de de value leef is of niet
const isEmpty = function(fieldValue) {
	return !fieldValue || !fieldValue.length;
};
const addErrors = function(field) {
	field.field.classList.add('has-error');
};
const enableListeners = function() {
	email.input.addEventListener('blur', function(e) {
		console.log(e.target.value);
		const typedInput = e.target.value;
		if (!isValidEmailAddress(typedInput)) {
			if (isEmpty(typedInput)) {
				email.errorMessage.innerHTML = 'This field is required';
			} else {
				email.errorMessage.innerHTML = 'The emailaddress is wrong';
			}
			addErrors(email);
		}
	});
	password.input.addEventListener('blur', function(e) {
		console.log(e.target.value);
		isValidPassword(e.target.value);
	});
	signButton.addEventListener('click', function() {
		console.log('clicked');
	});
};
const getDOMElements = function() {
	email.field = document.querySelector('.js-username-field');
	email.input = document.querySelector('.js-username-input');
	email.errorMessage = document.querySelector('.js-username-error-message');

	password.field = document.querySelector('.js-password-field');
	password.input = document.querySelector('.js-password-input');
	password.errorMessage = document.querySelector(
		'.js-password-error-message'
	);

	signButton = document.querySelector('.js-password-error-message');
	//console.log(email, password, signButton);
	enableListeners();
};
document.addEventListener('DOMContentLoaded', function() {
	console.log('😎');
	getDOMElements();
});
