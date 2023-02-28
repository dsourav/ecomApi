const { Schema, default: mongoose } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0.0,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
    category: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0.0,
    },
    discount: {
      type: Number,
      default: 0.0,
    },
  },
  { timestamp: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
