const { body } = require('express-validator');

const ValidationMsg = require('../validations/validation_message');
const { passwordRegex } = require('../utils/regex_util');

const userValidator = {};

userValidator.loginRules = () => {
  return [
    body('email')
      .notEmpty()
      .withMessage(ValidationMsg.emailRequired)
      .bail()
      .isEmail()
      .withMessage(ValidationMsg.emailNotValid),
    body('password')
      .notEmpty()
      .withMessage(ValidationMsg.passwordRequired)
      .bail()
      .matches(passwordRegex)
      .withMessage(ValidationMsg.passwordMustbeAlphaNumeric)
      .bail()
      .isLength({
        min: 8,
        max: 50,
      })
      .withMessage(ValidationMsg.passwordLengthHint),
  ];
};

userValidator.signUpRules = () => {
  return [
    body('name')
      .optional()
      .isLength({ min: 3, max: 100 })
      .withMessage(ValidationMsg.userName)
      .trim(),
    body('address').trim().optional(),
    body('email')
      .notEmpty()
      .withMessage(ValidationMsg.emailRequired)
      .bail()
      .isEmail()
      .withMessage(ValidationMsg.emailNotValid),
    body('password')
      .notEmpty()
      .withMessage(ValidationMsg.passwordRequired)
      .bail()
      .matches(passwordRegex)
      .withMessage(ValidationMsg.passwordMustbeAlphaNumeric)
      .bail()
      .isLength({
        min: 8,
        max: 50,
      })
      .withMessage(ValidationMsg.passwordLengthHint),
  ];
};

module.exports = userValidator;
