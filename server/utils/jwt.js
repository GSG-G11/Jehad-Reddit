require('env2')('.env');
const { sign, verify } = require('jsonwebtoken');

const signToken = (paylod) => new Promise((resolve, reject) => {
  sign(paylod, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});

module.exports = {
  signToken,
  verifyToken,
};
