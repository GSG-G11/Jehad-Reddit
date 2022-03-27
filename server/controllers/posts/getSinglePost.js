const { getSinglePostQuery } = require('../../database/queries/posts');

const getSinglePost = (req, res) => {
  const { id } = req.params;
  getSinglePostQuery(id)
    .then((data) => res.json({
      msg: 'Get Single Post',
      status: 200,
      post: data.rows,
    }))
    .catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
};

module.exports = getSinglePost;
