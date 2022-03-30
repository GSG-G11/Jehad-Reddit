const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const {
  pageNotFound,
  serverError,
  userRegist,
  userLogin,
  userLogOut,
  getTrendingPosts,
  getRedditPostsWhenSearch,
  searchPage,
  loginPage,
  registPage,
  userProfilePage,
  addPost,
  getAllPosts,
  getUserPosts,
  getPostComments,
  addComment,
  addVote,
  getVotes,
  deleteVote,
} = require('../controllers');

const router = express.Router();

router.get('/home', getTrendingPosts);

router.post('/posts', checkAuth, addPost);
router.get('/posts', getAllPosts);

router.get('/search/:value', getRedditPostsWhenSearch);
router.get('/search/:value/show', searchPage);

router.get('/user/:id/profile', userProfilePage);

router.get('/user/:id/profiles', getUserPosts);

router.get('/post/:id/comments', getPostComments);
router.post('/post/:id/comments', checkAuth, addComment);

router.post('/post/id/votes', addVote);
router.get('/post/:id/votes', getVotes);
router.delete('/post/id/deletevotes', deleteVote);

router.get('/login', loginPage);
router.get('/regist', registPage);

router.post('/regist', userRegist);
router.post('/login', userLogin);
router.post('/logout', checkAuth, userLogOut);

// router.use(checkAuth);

router.use(pageNotFound);
router.use(serverError);

module.exports = router;
