const { hash } = require('bcryptjs');
const { userRegistQuery, getUserByEmailQuery } = require('../../database/queries/users');
const { signUpSchema } = require('../../validation');
const { signToken, customizedErr } = require('../../utils');

let userData;
const userRegist = (req, res, next) => {
  const {
    username,
    email,
    password,
  } = req.body;

  signUpSchema.validateAsync(req.body)
    .then(() => getUserByEmailQuery(email))
    .then(({ rowCount }) => {
      if (rowCount) {
        throw customizedErr('Email already Exists', 400);
      } else {
        return hash(password, 10);
      }
    }).then((hashedPassword) => userRegistQuery({ username, email, password: hashedPassword }))
    .then(({ rows }) => {
      userData = rows[0];
      return signToken({ userId: rows[0].id, username: rows[0].username });
    })
    .then((token) => res.cookie('access_token', token) // { httpOnly: true, secure: true }
      .status(201)
      .json({ msg: 'Sign Up Successfuly', status: 201, post: userData }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(customizedErr(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = userRegist;
