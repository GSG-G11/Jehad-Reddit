const connection = require('../../config/connection');

const addCommentQuery = ({ commentContent, postId, userId }) => {
  const sql = {
    text: `INSERT INTO 
           comments(comment_content, post_id, user_id) 
           VALUES($1, $2, $3) RETURNING *`,
    values: [commentContent, postId, userId],
  };
  return connection.query(sql);
};

module.exports = addCommentQuery;
