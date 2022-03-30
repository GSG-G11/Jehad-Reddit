const { deletePostQuery } = require('../../database/queries/posts');

const deletePost = (req, res) => {
  const { id } = req.params;
  deletePostQuery(id)
    .then((data) => res.status(204).json({
      msg: 'Post Deleted Successfuly',
      post: data.rows[0],
    }))
    .catch((err) => res.status(500).json({
      msg: 'server error',
      status: 500,
      error: err,
    }));
};

module.exports = deletePost;
