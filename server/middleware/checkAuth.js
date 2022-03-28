const { customizedErr, verifyToken } = require('../utils');

const checkAuth = (req, res, next) => {
  const { access_token: accessToken } = req.cookies;
  if (!accessToken) {
    next(customizedErr('Not Authantication', 401));
  } else {
    verifyToken(accessToken)
      .then((token) => {
        req.userId = token.userId;
        req.username = token.username;
        next();
      })
      .catch((err) => res.status(401)
        .clearCookie('access_token')
        .json({ msg: 'unAuth', error: err }));
  }
};

module.exports = checkAuth;
