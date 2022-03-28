/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let usernameComment;
const createPostCard = (postData) => {
  const postBox = createElement('div', 'post-box');
  postBox.setAttribute('data-postId', postData.id);
  // Vote Section
  const voteButtonsDiv = createElement('div', 'vote-buttons');
  const voteUpSpan = createElement('span', 'material-icons up-icon');
  voteUpSpan.textContent = 'forward';
  const counterSpan = createElement('span', 'counter');
  counterSpan.textContent = 1;
  const voteDownSpan = createElement('span', 'material-icons down-icon');
  voteDownSpan.textContent = 'forward';
  voteButtonsDiv.append(voteUpSpan, counterSpan, voteDownSpan);

  // Post Content Section
  const postDetailsContainerDiv = createElement('div', 'post-details-container');
  const postDetailsDiv = createElement('div', 'posted-details');
  const avatarUsernameDiv = createElement('div', 'avatar-div');
  const usernameAvatarImage = createElement('img', 'username-avatar');
  usernameAvatarImage.src = '/img/avatar1.png';
  const postedBySpan = createElement('span', 'posted-by');
  const usernameLink = createElement('a', 'username');
  if (postData.username) {
    usernameLink.textContent = postData.username;
  } else {
    usernameLink.textContent = userName;
  }
  usernameLink.href = `/user/${postData.user_id}/profile`;
  postedBySpan.append('Posted by ', usernameLink);
  avatarUsernameDiv.append(usernameAvatarImage, postedBySpan);

  const timePostedSpan = createElement('span', 'time');
  timePostedSpan.textContent = postData.create_at;
  postDetailsDiv.append(avatarUsernameDiv, timePostedSpan);

  const postTitleHeader = createElement('h4', 'post-title');
  postTitleHeader.textContent = postData.post_title;

  const postContentPargraph = createElement('p', 'post-content');
  postContentPargraph.textContent = postData.post_content;

  const postImageTag = createElement('img', 'post-img');
  postImageTag.src = postData.post_image;

  const writeCommentButton = createElement('a', 'write-comment');
  writeCommentButton.setAttribute('data-postId', postData.id);
  const commentNumbers = createElement('span', 'comment-numbers');
  const commentIcon = createElement('span', 'material-icons');
  commentIcon.textContent = 'chat_bubble_outline';
  writeCommentButton.append(commentIcon, commentNumbers, 'Comments');

  // Fetch comments

  fetch(`/post/${postData.id}/comments`)
    .then((data) => data.json())
    .then(({ post, commentCount }) => {
      commentNumbers.textContent = commentCount;
    })
    .catch((err) => console.log(err));

  const commentsContainer = createElement('div', 'comments-container');
  const commentForm = createElement('form', 'comment-form');
  const commentInput = createElement('input', 'comment-input');
  commentInput.setAttribute('type', 'text');
  commentInput.setAttribute('placeholder', 'Write Comment..');

  if (document.cookie) {
    commentForm.style.display = 'block';
  } else {
    commentForm.style.display = 'none';
  }
  commentForm.addEventListener('submit', (form) => {
    form.preventDefault();
    if (commentInput.value !== '') {
      fetch(`/post/${postData.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          commentContent: commentInput.value,
          postId: postData.id,
          userId: userID,
        }),
      })
        .then((data) => data.json())
        .then(({ post }) => {
          ++commentNumbers.textContent;
          const commentBox = createElement('div', 'comment-box');
          const commentBy = createElement('h4', 'comment-by');
          const commentText = createElement('p', 'comment-text');
          commentBy.textContent = userName;
          commentText.textContent = post.comment_content;
          commentBox.append(commentBy, commentText);
          commentsContainer.append(commentBox);
        })
        .catch((err) => console.log(err));
      commentInput.value = '';
    }
  });

  writeCommentButton.addEventListener('click', (element) => {
    element.preventDefault();
    fetch(`/post/${postData.id}/comments`)
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
  });

  postDetailsContainerDiv.append(
    postDetailsDiv,
    postTitleHeader,
    postContentPargraph,
    postImageTag,
    writeCommentButton,
    commentsContainer,
  );

  postBox.append(voteButtonsDiv, postDetailsContainerDiv);

  postsContainer.prepend(postBox);
};
