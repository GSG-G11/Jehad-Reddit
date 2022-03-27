const connection = require('../../config/connection');

const getUserByIdQuery = (id) => {
  const sql = {
    text: 'SELECT username FROM users WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getUserByIdQuery;
