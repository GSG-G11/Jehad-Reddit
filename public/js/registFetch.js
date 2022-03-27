/* eslint-disable no-undef */

registPageButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/regist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      confirmPassword: confirmPasswordInput.value,
    }),
  }).then((data) => data.json())
    .then(({ msg, status, post }) => {
      if (status === 201) {
        window.location.href = `/user/${post.id}`;
      } else if (msg.includes('Email') || msg.includes('email')) {
        passwordErrorMessage.textContent = '';
        confirmPasswordErrorMessage.textContent = '';
        emailErrorMessage.textContent = msg;
        checkFalse(emailError);
      }
    })
    .catch((err) => console.log(err));
});
