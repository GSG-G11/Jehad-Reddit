/* eslint-disable no-undef */
let userPostId;
const id = window.location.href.split('/')[4];
fetch(`/user/${id}/profiles`)
  .then((data) => data.json())
  .then(({ post }) => {
    post.forEach((element) => {
      createPostCard(element);
      userPostId = post.id;
      usernameProfile.textContent = element.username;
    });
  })
  .catch((err) => console.log(err));

fetch(`/post/${userPostId}/comments`)
  .then((data) => data.json())
  .then(({ post, commentCount }) => {
    commentForm.append(commentInput);
    if (commentsContainer.children.length <= commentCount) {
      commentsContainer.append(commentForm);
    }
    post.forEach((comment) => {
      const commentBox = createElement('div', 'comment-box');
      const commentBy = createElement('h4', 'comment-by');
      const commentText = createElement('p', 'comment-text');
      commentBy.textContent = comment.username;
      usernameComment = comment.username;
      commentText.textContent = comment.comment_content;
      commentBox.append(commentBy, commentText);
      if (commentsContainer.children.length <= commentCount) {
        commentsContainer.append(commentBox);
      }
    });
  })
  .catch((err) => console.log(err));
