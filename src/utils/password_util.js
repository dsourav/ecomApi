const bcrypt = require('bcrypt');

const passwordUtil = {};

passwordUtil.generateHashedPassword = plainPassword => {
  return bcrypt.hashSync(plainPassword, parseInt(process.env.SALT_ROUND));
};

passwordUtil.passwordHasMatch = (plainPassword, encryptedPassword) => {
  return bcrypt.compareSync(plainPassword ?? '', encryptedPassword ?? '');
};

module.exports = passwordUtil;
