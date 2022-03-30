const connection = require('../../config/connection');

const deleteVoteQuery = ({ userId }) => {
  const sql = {
    text: 'DELETE FROM votes WHERE user_id = $1 RETURNING *;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = deleteVoteQuery;
