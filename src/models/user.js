const { Schema, default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');
const { generateHashedPassword } = require('../utils/password_util');

const generateToken = require('../utils/generator_token');
const { validateEmail, validatePassword } = require('../utils/validator');

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      unique: true,
      type: String,
      required: true,
      validate: {
        validator: validateEmail,
        message: 'Invalid email address',
      },
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ['admin', 'customer'],
      default: 'customer',
      trim: true,
    },
  },
  { timestamp: true }
);

userSchema.pre('save', async function (next) {
  const user = this;
  if (this.isModified('password')) {
    const hashedPassword = generateHashedPassword(user.password);
    user.password = hashedPassword;
  }
  next();
});

userSchema.methods.generateToken = function () {
  const user = this;

  const accessToken = generateToken({
    userId: user._id,
    userName: user.name,
    role: user.role,
    email: user.email,
  });
  const refreshToken = generateToken(
    {
      userId: user._id,
      userName: user.name,
      role: user.role,
      email: user.email,
    },
    true
  );

  return {
    accessToken,
    refreshToken,
  };
};

const User = mongoose.model('User', userSchema);

module.exports = User;
