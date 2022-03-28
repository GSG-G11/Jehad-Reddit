const connection = require('../../config/connection');

const getPostCommentsQuery = (postId) => {
  const sql = {
    text: `SELECT comments.comment_content, users.username
            FROM comments JOIN users ON users.id = comments.user_id WHERE comments.post_id = $1;`,
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getPostCommentsQuery;
