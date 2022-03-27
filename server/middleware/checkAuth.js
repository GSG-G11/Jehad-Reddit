const { customizedErr, verifyToken } = require('../utils');

const checkAuth = (req, res, next) => {
  const { access_token: accessToken } = req.cookies;
  if (!accessToken) {
    next(customizedErr('Not Authantication', 401));
    // res.redirect('/');
  } else {
    verifyToken(accessToken)
      .then((token) => {
        req.userId = token.userId;
        req.username = token.username;
        console.log(req.userId, req.username);
        // res.status(200).json(token);
        next();
      })
      .catch((err) => res.status(401)
        .clearCookie('access_token')
        .json({ msg: 'unAuth', error: err })).redirect('/login');
  }
};

module.exports = checkAuth;
