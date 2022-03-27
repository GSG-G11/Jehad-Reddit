const connection = require('../../config/connection');

const userRegistQuery = ({ username, email, password }) => {
  const sql = {
    text: 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *',
    values: [username, email, password],
  };
  return connection.query(sql);
};

module.exports = userRegistQuery;
