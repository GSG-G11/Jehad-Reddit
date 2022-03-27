/* eslint-disable no-undef */
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location = `/search/${searchInput.value}/show`;
});

if (document.cookie) {
  loginMainButton.style.display = 'none';
  logoutMainButton.style.display = 'block';
  logoutMainButton.href = '/';
  signUpMainButton.style.display = 'none';
  imageAvatar.style.display = 'block';
  addPostForm.style.display = 'flex';
} else {
  loginMainButton.href = '/login';
  signUpMainButton.style.display = 'block';
  imageAvatar.style.display = 'none';
  addPostForm.style.display = 'none';
}
