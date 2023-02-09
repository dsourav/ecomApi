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

module.exports = validator;
