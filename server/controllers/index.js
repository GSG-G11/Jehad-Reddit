const { pageNotFound, serverError } = require('./error');

const {
  userRegist,
  userLogin,
  userLogOut,
} = require('./users');

const {
  getRedditPostsWhenSearch,
  getTrendingPosts,
  addPost,
  getAllPosts,
  getUserPosts,
  deletePost,
} = require('./posts');

const { getPostComments, addComment } = require('./comments');

const {
  searchPage,
  loginPage,
  registPage,
  userProfilePage,
} = require('./pages');

const { addVote, getVotes, deleteVote } = require('./votes');

module.exports = {
  pageNotFound,
  serverError,
  userRegist,
  userLogin,
  userLogOut,
  getRedditPostsWhenSearch,
  getTrendingPosts,
  searchPage,
  loginPage,
  registPage,
  userProfilePage,
  addPost,
  getAllPosts,
  getUserPosts,
  deletePost,
  getPostComments,
  addComment,
  addVote,
  getVotes,
  deleteVote,
};
