const { join } = require('path');

const pageNotFound = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', '..', 'public', 'html', '404.html'));
};

const serverError = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({
      msg: err.message,
      status: err.status,
    });
  } else {
    res.status(500).sendFile(join(__dirname, '..', '..', '..', 'public', 'html', '500.html'));
  }
};

module.exports = {
  pageNotFound,
  serverError,
};
