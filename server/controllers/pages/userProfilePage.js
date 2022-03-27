const { join } = require('path');

const userProfilePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'userProfile.html'));
};

module.exports = userProfilePage;
