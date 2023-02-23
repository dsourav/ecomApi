class ValidationMsg {
  // user
  static emailRequired = 'Please provide email';
  static emailNotValid = 'Please provide valid email';
  static passwordRequired = 'Please provide password';
  static passwordMustbeAlphaNumeric = 'Password must be alphanumric';
  static passwordLengthHint = 'Password must be Minimum 8 and max 12';
  static userName = 'Please provide valid name with min 3 max 100 char';

  // product
  static productNameRequired = 'please provide product name';
  static productDescriptionRequired = 'please provide product description';
  static productQuantityRequired = 'please provide product quantity';
  static productQtyMustbeNumeric =
    'please provide numeric value for product quantity';
  static productPriceMustbeNumeric =
    'please provide numeric value for product price';
}

module.exports = ValidationMsg;
