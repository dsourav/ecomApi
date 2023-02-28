const Product = require('../models/product');

const authController = {};

authController.addProduct = async (req, res) => {
  try {
    let imageUrls = [];
    if (Array.isArray(req.imageUrls) && req.imageUrls.length) {
      imageUrls = req.imageUrls.map(urlObj => urlObj.url);
    }
    const product = new Product({ ...req.body, images: imageUrls });
    const result = await product.save();
    if (result) {
      return res.status(201).json({
        sucess: true,
        product: product,
      });
    }
    res.status(400).json({
      sucess: false,
      message: 'Failed to add product',
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: 'Failed to add product',
    });
  }
};
module.exports = authController;
