const connection = require('../../config/connection');

const addPostQuery = ({
  postTitle,
  postContent,
  postImage,
  createdTime,
  userId,
}) => {
  const sql = {
    text: `INSERT INTO 
           posts(post_title, post_content, post_image, create_at, user_id) 
           VALUES($1, $2, $3, $4, $5) RETURNING *`,
    values: [postTitle, postContent, postImage, createdTime, userId],
  };
  return connection.query(sql);
};

module.exports = addPostQuery;
