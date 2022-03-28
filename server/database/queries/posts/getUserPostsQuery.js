const connnection = require('../../config/connection');

const getUserPostsQuery = (userId) => {
  const sql = {
    text: `SELECT posts.post_title,
                  posts.post_content,
                  posts.post_image,
                  posts.create_at,
                  users.username,
                  posts.user_id,
                  posts.id
                  FROM posts JOIN users ON users.id = posts.user_id
                  WHERE users.id=$1;`,
    values: [userId],
  };
  return connnection.query(sql);
};

module.exports = getUserPostsQuery;
