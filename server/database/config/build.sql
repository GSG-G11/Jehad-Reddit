BEGIN;

DROP TABLE IF EXISTS users, posts, comments, votes CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  post_title VARCHAR(100) NOT NULL,
  post_content TEXT NOT NULL,
  post_image TEXT,
  create_at TEXT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) 
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment_content TEXT NOT NULL,
  post_id INT,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) 
);

CREATE TABLE votes(
  id SERIAL PRIMARY KEY,
  vote BOOLEAN,
  post_id INT,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) 
);

INSERT INTO users(username, email, password) VALUES('Jehad', 'jehad@gmail.com', '$2a$10$yE5DoDhutoNlpAcZsnOkJOq3HBm.chEx1aODpAOAz4lw7hH6syqY6');

INSERT INTO posts(post_title, post_content, post_image, create_at, user_id)
VALUES
('Welcome', 'Hello Everyone to Jehad Reddit Clone, waiting your review', 'https://i.postimg.cc/9f4RSmXk/reddit.webp', '3/27/2022, 7:33:43 AM',1);

INSERT INTO comments(comment_content, post_id, user_id) VALUES
('Test Comment', 1, 1);

INSERT INTO votes(vote, post_id, user_id) VALUES
(TRUE, 1, 1);

COMMIT;
