/* eslint-disable no-undef */
const MovePlaceholder = (selector) => {
  selector.addEventListener('focus', (e) => {
    e.target.previousElementSibling.style.transform = 'translate3d(0, -10px, 0) scale(0.83333333)';
  });
};

const returnPlaceholderToMainPosition = (selector, errorIcon) => {
  const iconError = errorIcon;
  selector.addEventListener('blur', (e) => {
    if (selector.value === '') {
      e.target.previousElementSibling.style.transform = 'translate3d(0, 0, 0) scale(1)';
      iconError.style.display = 'none';
    } else {
      e.target.previousElementSibling.style.transform = 'translate3d(0, -10px, 0) scale(0.83333333)';
    }
  });
};

const checkTrue = (selectorError) => {
  const selectError = selectorError;
  selectError.textContent = 'check_circle';
  selectError.style.display = 'block';
  selectError.style.color = 'blue';
};
const checkFalse = (selectorError) => {
  const selectError = selectorError;
  selectError.textContent = 'highlight_off';
  selectError.style.display = 'block';
  selectError.style.color = 'red';
};

MovePlaceholder(emailInput);
returnPlaceholderToMainPosition(emailInput, emailError);

// Check if email input is validate when enter value
emailInput.addEventListener('keyup', () => {
  const email = emailInput.value;
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail)) {
    checkTrue(emailError);
  } else {
    checkFalse(emailError);
  }
});

MovePlaceholder(passwordInput);
returnPlaceholderToMainPosition(passwordInput, passwordError);

// // Check if password input is validate when enter value
passwordInput.addEventListener('keyup', () => {
  const password = passwordInput.value;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/;
  if (password.match(regexPassword) && password.length > 7) {
    checkTrue(passwordError);
  } else {
    checkFalse(passwordError);
  }
});

MovePlaceholder(usernameInput);
returnPlaceholderToMainPosition(usernameInput, usernameError);

// Check if username input is validate when enter value
usernameInput.addEventListener('keyup', () => {
  const username = usernameInput.value;
  if (username.length >= 3) {
    checkTrue(usernameError);
  } else {
    checkFalse(usernameError);
  }
});

MovePlaceholder(confirmPasswordInput);
returnPlaceholderToMainPosition(confirmPasswordInput, confirmPasswordError);

// Check if password input is validate when enter value
confirmPasswordInput.addEventListener('keyup', () => {
  const confirmPassword = confirmPasswordInput.value;
  if (confirmPassword === passwordInput.value) {
    checkTrue(confirmPasswordError);
  } else {
    checkFalse(confirmPasswordError);
  }
});
