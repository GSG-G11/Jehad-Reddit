const connection = require('../../config/connection');

const getAllPostsQuery = () => {
  const sql = {
    text: `SELECT posts.id,
                  posts.post_title,
                  posts.post_content,
                  posts.post_image,
                  posts.create_at,
                  users.username,
                  posts.user_id
                  FROM posts JOIN users ON users.id = posts.user_id;`,
    values: [],
  };
  return connection.query(sql);
};

module.exports = getAllPostsQuery;
