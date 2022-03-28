const { addCommentQuery } = require('../../database/queries/comments');

const addComment = (req, res) => {
  addCommentQuery(req.body)
    .then((data) => res.status(201).json({
      msg: 'Comment Added Successfuly!',
      status: 201,
      post: data.rows[0],
      commentCount: data.rowCount,
    }))
    .catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
};

module.exports = addComment;
