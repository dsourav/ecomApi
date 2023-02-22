const { body } = require('express-validator');

const ValidationMsg = require('../validations/validation_message');

const userValidator = {};

userValidator.loginRules = () => {
  return [
    body('email', ValidationMsg.emailRequired).isEmail(),
    body('password', ValidationMsg.passwordRequired)
      .isAlphanumeric()
      .bail(ValidationMsg.passwordMustbeAlphaNumeric)
      .isLength({
        min: 8,
        max: 12,
      })
      .bail(ValidationMsg.passwordLengthHint),
  ];
};

userValidator.signUpRules = () => {
  return [
    body('name', ValidationMsg.userName)
      .trim()
      .optional()
      .isLength({ min: 3, max: 100 }),
    body('address').trim().optional(),
    body('email', ValidationMsg.emailRequired)
      .isEmail()
      .bail(ValidationMsg.emailNotValid),
    body('password', ValidationMsg.passwordRequired)
      .isAlphanumeric()
      .bail(ValidationMsg.passwordMustbeAlphaNumeric)
      .isLength({
        min: 8,
        max: 12,
      })
      .bail(ValidationMsg.passwordLengthHint),
  ];
};

module.exports = userValidator;
