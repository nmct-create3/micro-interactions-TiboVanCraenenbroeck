const handlePasswordSwitcher = function() {
	const domInput = document.querySelector('.js-password-input'),
		domToggle = document.querySelector('.js-password-toggle');
	domToggle.addEventListener('change', function() {
		console.log('Hier');
		if (domInput.type === 'text') {
			domInput.type = 'password';
		} else {
			domInput.type = 'text';
		}
	});
};
document.addEventListener('DOMContentLoaded', function() {
	handlePasswordSwitcher();
});
