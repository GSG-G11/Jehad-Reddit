const connection = require('../../config/connection');

const getSinglePostQuery = (postId) => {
  const sql = {
    text: `SELECT posts.post_title,
            posts.post_content,
            posts.post_image,
            posts.create_at,
            users.username,
            posts.user_id
            FROM posts JOIN users ON users.id = posts.user_id
            WHERE posts.id=$1;`,
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getSinglePostQuery;
