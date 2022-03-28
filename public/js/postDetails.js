/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const timeNow = (new Date()).toLocaleString();
let postId;

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
  if (postTitleInput.value !== '') {
    fetch('/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postTitle: postTitleInput.value,
        postContent: postContentInput.value,
        postImage: postImageInput.value,
        createdTime: timeNow,
        userId: userID,
      }),
    }).then((data) => data.json())
      .then(({ post }) => {
        createPostCard(post);
      })
      .catch((err) => console.log(err));
    postTitleInput.value = '';
    postContentInput.value = '';
    postImageInput.value = '';
  }
});
