const fetch = require('node-fetch');

const getRedditPostsWhenSearch = (req, res) => {
  const { value } = req.params;
  fetch(`https://www.reddit.com/r/${value}.json`)
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

module.exports = getRedditPostsWhenSearch;
