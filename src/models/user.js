const { Schema, default: mongoose } = require('mongoose');
const jwt = require('jsonwebtoken');

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
      validate: {
        validator: validatePassword,
        message: 'Invalid password provided',
      },
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
    token: {
      type: String,
    },
  },
  { timestamp: true }
);

userSchema.methods.generateToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      userId: user._id,
      userName: user.name,
      role: user.role,
      email: user.email,
    },
    process.env.ACCESS_TOKEN_PRIVATE_KEY,
    {
      expiresIn: '1 days',
    }
  );
};

const User = mongoose.model('User', userSchema);

module.exports = User;
