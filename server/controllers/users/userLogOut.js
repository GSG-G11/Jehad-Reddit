const userLogOut = (req, res, next) => {
  try {
    res
      .clearCookie('id')
      .clearCookie('username')
      .clearCookie('access_token').redirect('/');
  } catch (err) {
    next(err);
  }
};

module.exports = userLogOut;
