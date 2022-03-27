const { getAllPostsQuery } = require('../../database/queries/posts');

const getAllPosts = (req, res) => {
  getAllPostsQuery()
    .then((data) => res.status(201)
      .json({
        msg: 'All Posts',
        status: 201,
        post: data.rows,
      })).catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
};

module.exports = getAllPosts;
