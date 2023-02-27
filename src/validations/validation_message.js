class ValidationMsg {
  // user
  static emailRequired = 'Please provide email';
  static emailNotValid = 'Please provide valid email';
  static passwordRequired = 'Please provide password';
  static passwordMustbeAlphaNumeric =
    'Password must contain 8 characters, including a number, a letter, and a special character';
  static passwordLengthHint = 'Password must be Minimum 8 and max 12';
  static userName = 'Please provide valid name with min 3 max 100 char';

  // product
  static productNameRequired = 'please provide product name';
  static productDescriptionRequired = 'please provide product description';
  static productQuantityRequired = 'please provide product quantity';
  static productQtyMustbeNumeric =
    'please provide numeric value for product quantity';
  static productPriceIsRequired = 'please provide product price';
  static productPriceMustbeNumeric =
    'please provide numeric value for product price';
  static productDiscountMustbeNumeric =
    'please provide numeric value for product discount';
}

module.exports = ValidationMsg;
