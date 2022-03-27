const { pageNotFound, serverError } = require('./error');

const {
  userRegist,
  userLogin,
  userLogOut,
  getUserById,
} = require('./users');

const {
  getRedditPostsWhenSearch,
  getTrendingPosts,
  addPost,
  getAllPosts,
  getUserPosts,
  getSinglePost,
} = require('./posts');

const { getPostComments, addComment } = require('./comments');

const {
  searchPage,
  homePage,
  loginPage,
  registPage,
  userProfilePage,
} = require('./pages');

module.exports = {
  pageNotFound,
  serverError,
  userRegist,
  userLogin,
  userLogOut,
  getUserById,
  getRedditPostsWhenSearch,
  getTrendingPosts,
  searchPage,
  homePage,
  loginPage,
  registPage,
  userProfilePage,
  addPost,
  getAllPosts,
  getUserPosts,
  getPostComments,
  addComment,
  getSinglePost,
};
