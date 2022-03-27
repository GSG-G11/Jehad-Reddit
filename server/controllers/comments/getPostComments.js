const { getPostCommentsQuery } = require('../../database/queries/comments');

const getPostComments = (req, res) => {
  const { id } = req.params;
  getPostCommentsQuery(id)
    .then((data) => res.status(201).json({
      msg: 'Comment Added Successfuly!',
      status: 201,
      post: data.rows,
      commentCount: data.rowCount,
    }))
    .catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
};

module.exports = getPostComments;
