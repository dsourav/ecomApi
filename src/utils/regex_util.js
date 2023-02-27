const regexUtil = {};

regexUtil.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Regex to check password has at least 8 characters, including a number, a letter, and a special character.
regexUtil.passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

regexUtil.bdMobileNumberRegex = /^0\d{10}$/;

regexUtil.validateEmail = email => {
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

regexUtil.validatePassword = password => {
  return passwordRegex.test(password);
};

regexUtil.validateMaxWord = (value, maxWord) => {
  return value.split(' ').length <= maxWord;
};

regexUtil.validateBDPhoneNumber = number => {
  return bdMobileNumberRegex.test(number);
};

module.exports = regexUtil;
