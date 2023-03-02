const { body, check } = require('express-validator');

const ValidationMsg = require('../validations/validation_message');

const productValidator = {};

productValidator.addProductRules = () => {
  return [
    check('name')
      .notEmpty()
      .withMessage(ValidationMsg.productNameRequired)
      .trim(),

    check('description')
      .notEmpty()
      .withMessage(ValidationMsg.productDescriptionRequired)
      .trim(),

    check('quantity')
      .notEmpty()
      .withMessage(ValidationMsg.productDescriptionRequired)
      .bail()
      .isNumeric()
      .withMessage(ValidationMsg.productQtyMustbeNumeric)
      .trim(),

    check('price')
      .notEmpty()
      .withMessage(ValidationMsg.productPriceIsRequired)
      .bail()
      .isNumeric()
      .withMessage(ValidationMsg.productPriceMustbeNumeric),

    check('discount')
      .optional()
      .isNumeric()
      .withMessage(ValidationMsg.productDiscountMustbeNumeric),
  ];
};

// productValidator.updateProductRules = () => {
//   const rules = productValidator.addProductRules();
//   rules[0] =
// };

module.exports = productValidator;
