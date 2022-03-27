const { addPostQuery } = require('../../database/queries/posts');

const addPost = (req, res) => {
  addPostQuery(req.body)
    .then((data) => res.status(201).json({
      msg: 'Post Added Successfuly',
      post: data.rows[0],
    }))
    .catch((err) => res.status(500).json({
      msg: 'server error',
      status: 500,
      error: err,
    }));
};

module.exports = addPost;
