const connection = require('../../config/connection');

const addVoteQuery = ({ vote, postId, userId }) => {
  const sql = {
    text: `INSERT INTO 
           votes(vote, post_id, user_id) 
           VALUES($1, $2, $3) RETURNING *`,
    values: [vote, postId, userId],
  };
  return connection.query(sql);
};

module.exports = addVoteQuery;
