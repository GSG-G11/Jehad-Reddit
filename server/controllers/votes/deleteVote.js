const { deleteVoteQuery } = require('../../database/queries/votes');

const deleteVote = (req, res) => {
  deleteVoteQuery(req.body)
    .then((data) => res.status(201).json({
      msg: 'vote deleted Successfuly!',
      status: 201,
      post: data.rows[0],
    }))
    .catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
};

module.exports = deleteVote;
