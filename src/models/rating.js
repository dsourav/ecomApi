const { Schema, default: mongoose } = require('mongoose');
const { validateMaxWord } = require('../utils/validator');

const ratingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
      min: 1.0,
      max: 5.0,
    },
    description: {
      type: String,
      validate: {
        validator: value => validateMaxWord(value, 2000),
        message: 'Review must not exceed 2000 words',
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;
