/* eslint-disable no-undef */
loginPageButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  }).then((data) => data.json())
    .then(({ msg, status, post }) => {
      if (status === 201) {
        window.location.href = `/user/${post.userId}`;
      } else if (msg.includes('Email') || msg.includes('email')) {
        passwordErrorMessage.textContent = '';
        emailErrorMessage.textContent = msg;
        checkFalse(emailError);
      } else {
        emailErrorMessage.textContent = '';
        passwordErrorMessage.textContent = msg;
        checkFalse(passwordError);
      }
    })
    .catch((err) => console.log(err));
});
