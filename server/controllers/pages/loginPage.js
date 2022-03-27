const { join } = require('path');

const loginPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'login.html'));
};

module.exports = loginPage;
