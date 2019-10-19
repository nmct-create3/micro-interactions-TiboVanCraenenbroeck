const handleEventListener = function(domLabel, domInput) {
  if (domInput.value.length == 0) {
    // Remove class
    domLabel.classList.remove("is-floating");
  } else {
    //Add class
    domLabel.classList.add("is-floating");
  }
};
const handleFloatingLabel = function() {
  const domFloatingLabelPassword = document.querySelector(
    ".js-label-word__password"
  );
  const dominputPassword = document.querySelector(".js-password-input");
  dominputPassword.addEventListener("blur", function() {
    handleEventListener(domFloatingLabelPassword, dominputPassword);
  });
  const domFloatingLabelInput = document.querySelector(".js-label-word__input");
  const dominputInput = document.querySelector(".js-username-input");
  dominputInput.addEventListener("blur", function() {
    handleEventListener(domFloatingLabelInput, dominputInput);
  });
};
document.addEventListener("DOMContentLoaded", function() {
  console.log("Script loaded!");
  handleFloatingLabel();
});
