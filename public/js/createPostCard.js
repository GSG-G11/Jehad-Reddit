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

  // Fetch Vote
  if (document.cookie) {
    voteUpSpan.style.pointerEvents = 'auto';
    voteDownSpan.style.pointerEvents = 'auto';
  } else {
    voteUpSpan.style.pointerEvents = 'none';
    voteDownSpan.style.pointerEvents = 'none';
  }
  fetch(`/post/${postData.id}/votes`)
    .then((data) => data.json())
    .then(({ post }) => {
      counterSpan.textContent = post.count;
    })
    .catch((err) => console.log(err));

  // vote up
  voteUpSpan.addEventListener('click', (e) => {
    if (!e.target.classList.contains('.active')) {
      fetch('/post/id/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vote: 'TRUE',
          postId: postData.id,
          userId: userID,
        }),
      })
        .then((data) => data.json())
        .then(({ post }) => {
          counterSpan.textContent++;
          e.target.style.pointerEvents = 'none';
          e.target.classList.add('active');
          voteDownSpan.classList.remove('active');
          voteDownSpan.style.pointerEvents = 'auto';
        })
        .catch((err) => console.log(err));
    }
  });

  // Vote Down
  voteDownSpan.addEventListener('click', (e) => {
    if (!e.target.classList.contains('.active')) {
      fetch('/post/id/deletevotes', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userID,
        }),
      })
        .then((data) => data.json())
        .then(({ post }) => {
          counterSpan.textContent--;
          e.target.classList.add('active');
          voteUpSpan.classList.remove('active');
          e.target.style.pointerEvents = 'none';
          voteUpSpan.style.pointerEvents = 'auto';
        })
        .catch((err) => console.log(err));
    }
  });
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

  const deleteTimeDiv = createElement('div', 'delete-time-div');
  const timePostedSpan = createElement('span', 'time');
  const deleteIcon = createElement('span', 'material-icons delete-icon');
  deleteIcon.textContent = 'delete';
  timePostedSpan.textContent = postData.create_at;
  if (postData.user_id == userID) {
    deleteTimeDiv.append(timePostedSpan, deleteIcon);
  } else {
    deleteTimeDiv.append(timePostedSpan);
  }
  postDetailsDiv.append(avatarUsernameDiv, deleteTimeDiv);
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

  // Delete Post
  deleteIcon.addEventListener('click', (e) => {
    fetch(`/post/${postData.id}/delete`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      e.path[4].remove();
    })
      .catch((err) => console.log(err));
  });

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
  const sendIcon = createElement('span', 'material-icons send-icon');
  sendIcon.textContent = 'send';
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
          const commentedAvatar = createElement('img', 'comment-img');
          commentedAvatar.src = '/img/comment-avatar.png';
          const commentInfo = createElement('div', 'comment-info');
          const commentBy = createElement('h4', 'comment-by');
          const commentText = createElement('p', 'comment-text');
          commentBy.textContent = userName;
          commentText.textContent = post.comment_content;
          commentInfo.append(commentBy, commentText);
          commentBox.append(commentedAvatar, commentInfo);
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
        commentForm.append(commentInput, sendIcon);
        if (commentsContainer.children.length <= commentCount) {
          commentsContainer.append(commentForm);
        }
        commentInput.focus();
        post.forEach((comment) => {
          const commentBox = createElement('div', 'comment-box');
          const commentedAvatar = createElement('img', 'comment-img');
          commentedAvatar.src = '/img/comment-avatar.png';
          const commentInfo = createElement('div', 'comment-info');
          const commentBy = createElement('h4', 'comment-by');
          const commentText = createElement('p', 'comment-text');
          commentBy.textContent = comment.username;
          usernameComment = comment.username;
          commentText.textContent = comment.comment_content;
          commentInfo.append(commentBy, commentText);
          commentBox.append(commentedAvatar, commentInfo);
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
