const { Schema, default: mongoose } = require('mongoose');

const orderSchema = new Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['pending', 'shipped', 'delivered'],
      default: 'pending',
    },
  },
  { timestamp: true }
);

const Order = mongoose.model('Order', orderSchema);

OrderSchema.statics.getOrderedProducts = function (orderId, callback) {
  this.aggregate(
    [
      {
        $match: { _id: orderId },
      },
      {
        $lookup: {
          from: 'products',
          localField: 'products._id',
          foreignField: '_id',
          as: 'products',
        },
      },
      {
        $unwind: '$products',
      },
      {
        $replaceRoot: { newRoot: '$products' },
      },
    ],
    callback
  );
};

module.exports = Order;
