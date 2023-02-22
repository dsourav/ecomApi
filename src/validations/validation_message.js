class ValidationMsg {
  static emailRequired = 'Please provide email';
  static emailNotValid = 'Please provide valid email';
  static passwordRequired = 'Please provide password';
  static passwordMustbeAlphaNumeric = 'Password must be alphanumric';
  static passwordLengthHint = 'Password must be Minimum 8 and max 12';
  static userName = 'Please provide valid name with min 3 max 100 char';
}

module.exports = ValidationMsg;
