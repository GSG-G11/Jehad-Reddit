const { getUserPostsQuery } = require('../../database/queries/posts');

const getUserPosts = (req, res) => {
  const { id } = req.params;
  getUserPostsQuery(id)
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

module.exports = getUserPosts;
