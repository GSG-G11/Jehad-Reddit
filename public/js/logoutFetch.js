/* eslint-disable no-undef */
logoutMainButton.addEventListener('click', (e) => {
  fetch('/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }).then(() => {
    window.location.href = '/';
  }).catch((err) => console.log(err));
});
