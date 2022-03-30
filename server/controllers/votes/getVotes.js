const { getVotesQuery } = require('../../database/queries/votes');

const getVotes = (req, res) => {
  const { id } = req.params;
  getVotesQuery(id)
    .then((data) => res.status(201).json({
      msg: 'votes!',
      status: 201,
      post: data.rows[0],
    }))
    .catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
};

module.exports = getVotes;
