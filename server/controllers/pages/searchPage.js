const { join } = require('path');

const searchPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'searchPage.html'));
};

module.exports = searchPage;
