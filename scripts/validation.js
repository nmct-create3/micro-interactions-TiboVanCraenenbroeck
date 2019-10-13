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
const removeError = function(field) {
	field.field.classList.remove('has-error');
};

const doubleCkeckEmail = function(e) {
	if (isValidEmailAddress(e.target.value)) {
		removeError(email);
		email.input.removeEventListener('input', doubleCkeckEmail);
	} else {
		const typedInput = e.target.value;
		if (isEmpty(typedInput)) {
			email.errorMessage.innerHTML = 'The field is required';
		} else {
			email.errorMessage.innerHTML = 'The email is wrong';
		}
	}
};
const doubleCheckPassword = function(e) {
	if (!isValidPassword) {
		password.errorMessage.innerHTML = 'This field is required';
	} else {
		removeError(password);
		password.input.removeEventListener('input', doubleCheckPassword);
	}
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

			// Na dat er een fout was, houden we de boel in de gaten, want de user gaat het oplossen.
			email.input.addEventListener('input', doubleCkeckEmail);
			// Tijdens het typen gaan we vanaf nu de input bij elk karakter checken
		}
	});
	password.input.addEventListener('blur', function(e) {
		console.log(e.target.value);
		if (!isValidPassword(e.target.value)) {
			password.errorMessage.innerHTML = 'This field is required';
			addErrors(password);
			password.input.addEventListener('input', doubleCheckPassword);
		}
	});
	signButton.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('clicked');
		// Controleer of alle velden zijn ingevuld
		if (
			isValidEmailAddress(email.input.value) &&
			isValidPassword(password.input.value)
		) {
			console.log('In Orde');
			console.log(password.input.value);
			console.log(email.input.value);
		} else {
			console.log('Niet in orde');
		}
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

	signButton = document.querySelector('.js-sign-in-button');
	//console.log(email, password, signButton);
	enableListeners();
};
document.addEventListener('DOMContentLoaded', function() {
	console.log('😎');
	getDOMElements();
});
