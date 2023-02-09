const { Schema, default: mongoose } = require('mongoose');

const { validateEmail, validatePassword } = require('../utils/validator');

const userSchema = new Schema({
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
  type: {
    type: String,
    trim: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
