const connection = require('../../config/connection');

const getVotesQuery = (postId) => {
  const sql = {
    text: `SELECT COUNT(votes.id)
    FROM votes WHERE 
    post_id = $1`,
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getVotesQuery;
