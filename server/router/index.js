const express = require('express');
// const checkAuth = require('../middleware/checkAuth');
const {
  pageNotFound,
  serverError,
  userRegist,
  userLogin,
  userLogOut,
  getUserById,
  getTrendingPosts,
  getRedditPostsWhenSearch,
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
} = require('../controllers');

const router = express.Router();

router.get('/home', getTrendingPosts);

router.get('/user/:id', homePage);

router.post('/posts', addPost);
router.get('/posts', getAllPosts);
router.get('/userr/:id', getUserById);

router.get('/search/:value', getRedditPostsWhenSearch);
router.get('/search/:value/show', searchPage);

router.get('/user/:id/profile', userProfilePage);

router.get('/user/:id/profiles', getUserPosts);

router.get('/post/:id/comments', getPostComments);
router.post('/post/:id/comments', addComment);

router.get('/login', loginPage);
router.get('/regist', registPage);

router.post('/regist', userRegist);
router.post('/login', userLogin);
router.post('/logout', userLogOut);

// router.use(checkAuth);

router.use(pageNotFound);
router.use(serverError);

module.exports = router;
