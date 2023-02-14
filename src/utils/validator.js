const validator = {};

validator.validateEmail = email => {
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

validator.validatePassword = password => {
  // Regex to check password has at least 8 characters, including a number, a letter, and a special character.
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
};

validator.validateMaxWord = (value, maxWord) => {
  return value.split(' ').length <= maxWord;
};

validator.validateBDPhoneNumber = number => {
  const bdMobileNumberRegex = /^0\d{10}$/;
  return bdMobileNumberRegex.test(number);
};

module.exports = validator;
