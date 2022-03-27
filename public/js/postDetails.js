/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const id = window.location.href.split('/')[4];
const timeNow = (new Date()).toLocaleString();
let usernameTest;
let postId;

fetch(`/userr/${id}`)
  .then((data) => data.json())
  .then(({ post }) => {
    usernameTest = post.username;
  })
  .catch((err) => console.log(err));

fetch('/posts')
  .then((data) => data.json())
  .then(({ post }) => {
    post.forEach((element) => {
      createPostCard(element);
      postId = element.id;
    });
  })
  .catch((err) => console.log(err));

postButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      postTitle: postTitleInput.value,
      postContent: postContentInput.value,
      postImage: postImageInput.value,
      createdTime: timeNow,
      userId: id,
    }),
  }).then((data) => data.json())
    .then(({ post }) => {
      createPostCard(post);
    })
    .catch((err) => console.log(err));
  postTitleInput.value = '';
  postContentInput.value = '';
  postImageInput.value = '';
});
