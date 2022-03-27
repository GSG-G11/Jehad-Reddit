const userLogOut = (req, res, next) => {
  try {
    res.clearCookie('access_token').redirect('/');
  } catch (err) {
    next(err);
  }
};

module.exports = userLogOut;
