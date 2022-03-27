const fetch = require('node-fetch');

const getTrendingPosts = (req, res) => {
  fetch('https://www.reddit.com/r/politics/.json?limit=4')
    .then((data) => data.json())
    .then((data) => res.json({
      msg: 'searching',
      status: 200,
      post: data,
    })).catch((err) => res.status(500).json({
      msg: 'Server Error',
      status: 500,
      error: err,
    }));
};

module.exports = getTrendingPosts;
