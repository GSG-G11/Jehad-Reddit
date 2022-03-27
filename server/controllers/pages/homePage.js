const { join } = require('path');

const homePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'index.html'));
};

module.exports = homePage;
