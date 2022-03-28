/* eslint-disable no-undef */
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location = `/search/${searchInput.value}/show`;
});

let userName;
let userID;

if (document.cookie) {
  userName = document.cookie.split('; ')[0].slice(9);
  userID = document.cookie.split('; ')[1].slice(3);
  navAvatarImg.setAttribute('title', userName);
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
