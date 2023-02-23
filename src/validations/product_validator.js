const { body } = require('express-validator');

const ValidationMsg = require('../validations/validation_message');

const productValidator = {};

productValidator.addProductRules = () => {
  return [
    body('name', ValidationMsg.productNameRequired).trim(),
    body('description', ValidationMsg.productDescriptionRequired).trim(),
    body('quantity', ValidationMsg.productDescriptionRequired)
      .isNumeric()
      .bail(ValidationMsg.productQtyMustbeNumeric)
      .trim(),

    body('price')
      .optional()
      .isNumeric()
      .bail(ValidationMsg.productPriceMustbeNumeric),

    body('price')
      .optional()
      .isNumeric()
      .bail(ValidationMsg.productPriceMustbeNumeric),
  ];
};

module.exports = productValidator;
