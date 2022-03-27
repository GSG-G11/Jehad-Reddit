const connection = require('../../config/connection');

const userLoginQuery = () => {
  const sql = {
    text: 'SELECT email, password FROM users;',
    values: [],
  };
  return connection.query(sql);
};

module.exports = userLoginQuery;
