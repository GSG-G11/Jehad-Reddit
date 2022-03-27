const { join } = require('path');

const registPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'signup.html'));
};

module.exports = registPage;
