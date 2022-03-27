/* eslint-disable no-undef */
const id = window.location.href.split('/')[4];
fetch(`/user/${id}/profiles`)
  .then((data) => data.json())
  .then(({ post }) => {
    post.forEach((element) => {
      createPostCard(element);
      usernameProfile.textContent = element.username;
    });
  })
  .catch((err) => console.log(err));
