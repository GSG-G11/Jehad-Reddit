const { compare } = require('bcryptjs');
const { getUserByEmailQuery } = require('../../database/queries/users');
const { loginSchema } = require('../../validation');
const { signToken, customizedErr } = require('../../utils');

let userId;
let username;

const userLogin = (req, res, next) => {
  const { email, password } = req.body;

  loginSchema.validateAsync(req.body)
    .then(() => getUserByEmailQuery(email))
    .then(({ rows }) => {
      if (!rows.length) {
        throw customizedErr('Email Not Exist', 400);
      } else {
        userId = rows[0].id;
        username = rows[0].username;
        return compare(password, rows[0].password);
      }
    }).then((isMatch) => {
      if (!isMatch) {
        throw customizedErr('Wrong Password', 400);
      } else {
        return signToken({ userId, username });
      }
    })
    .then((token) => res
      .status(201)
      .cookie('username', username)
      .cookie('id', userId)
      .cookie('access_token', token) // { httpOnly: true, secure: true }
      .json({ msg: 'Log In Successfuly', status: 201, post: { username, userId } }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(customizedErr(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = userLogin;
