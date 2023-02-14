const { Schema, default: mongoose } = require('mongoose');
const { validateBDPhoneNumber } = require('../utils/validator');

const addressScheme = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      validate: {
        validator: validateBDPhoneNumber,
        message: 'Please provide valid BD phone number. ex: 01555555555',
      },
    },
    flatNo: String,
    area: String,
    pinCode: String,
    city: String,
    isDefault: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model('Address', addressScheme);
module.exports = Address;
