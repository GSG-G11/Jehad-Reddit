/* eslint-disable no-undef */
window.onscroll = () => {
  if (window.scrollY > 250) {
    scrollUpBtn.style.display = 'block';
    scrollUpBtn.onclick = () => {
      document.documentElement.scrollTop = 0;
    };
  } else {
    scrollUpBtn.style.display = 'none';
  }
};

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
  usernameProfile.textContent = userName;
  navAvatarImg.setAttribute('href', `/user/${userID}/profile`);
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
