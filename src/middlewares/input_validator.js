const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  console.log(errors);
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(403).json({ success: false, errors: extractedErrors });
};

module.exports = validate;
