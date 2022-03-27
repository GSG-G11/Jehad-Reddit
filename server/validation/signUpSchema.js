const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email(),
  password: Joi.string().min(7).required(),
  confirmPassword: Joi.ref('password'),
});

module.exports = signUpSchema;
