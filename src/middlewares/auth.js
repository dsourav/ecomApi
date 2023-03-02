const jwt = require('jsonwebtoken');

const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].replace('Bearer ', '');

    const data = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);

    const user = await User.findById(data.userId);
    if (user) {
      req.token = token;
      req.user = user;
      req.isAdmin = user.role === 'admin' ? true : false;

      return next();
    }

    return res.status(403).json({
      error: 'Authentication Failed',
    });
  } catch (error) {
    return res.status(403).json({
      error: 'Authentication Failed',
    });
  }
};

module.exports = auth;
