const User = require('../models/user');
const { passwordHasMatch } = require('../utils/password_util');

const authController = {};

authController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    });

    const isUserExist = passwordHasMatch(password, user.password);
    if (isUserExist) {
      const { accessToken, refreshToken } = user.generateToken();
      return res.status(200).json({
        success: true,
        accessToken,
        refreshToken,
      });
    }

    res.status(401).json({ success: false, message: 'Failed to login' });
  } catch (error) {
    res.status(401).json({ success: false, message: 'Failed to login' });
  }
};

authController.signup = async (req, res) => {
  const { email, password, name, address } = req.body;
  const user = new User({
    email,
    password,
    name,
    address,
  });

  try {
    const result = await user.save();
    const { accessToken, refreshToken } = result.generateToken();
    res.status(201).json({
      success: true,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Failed to Authenticate',
    });
  }
};

module.exports = authController;
