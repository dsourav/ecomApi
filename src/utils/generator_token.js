const jwt = require('jsonwebtoken');

const generateToken = function (payload, isRefreshToken) {
  const token = jwt.sign(
    payload,
    isRefreshToken
      ? `${process.env.REFRESH_TOKEN_PRIVATE_KEY}`
      : `${process.env.ACCESS_TOKEN_PRIVATE_KEY}`,
    {
      expiresIn: isRefreshToken
        ? `${process.env.REFRESH_TOKEN_EXPIRES_IN}`
        : `${process.env.ACCESS_TOKEN_EXPIRES_IN}`,
    }
  );

  return token;
};

module.exports = generateToken;
