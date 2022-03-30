const { addVoteQuery } = require('../../database/queries/votes');

const addVote = (req, res) => {
  addVoteQuery(req.body)
    .then((data) => res.status(201).json({
      msg: 'vote Added Successfuly!',
      status: 201,
      post: data.rows[0],
    }))
    .catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
};

module.exports = addVote;
