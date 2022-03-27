const { getUserByIdQuery } = require('../../database/queries/users');

const getUserById = (req, res) => {
  const { id } = req.params;
  getUserByIdQuery(id)
    .then((data) => res.status(201)
      .json({
        msg: 'All Posts',
        status: 201,
        post: data.rows[0],
      })).catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
};

module.exports = getUserById;
