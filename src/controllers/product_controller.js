const Product = require('../models/product');
const { deleteFilesFromCloud } = require('../utils/cloud_file_util');

const productController = {};

productController.addProduct = async (req, res) => {
  try {
    let imageUrls = [];
    if (Array.isArray(req.imageUrls) && req.imageUrls.length) {
      imageUrls = req.imageUrls;
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

productController.updateProduct = async (req, res) => {
  const { name, description, quantity, deletedImages, category, discount } =
    req.body;
  try {
    const product = await Product.findById(req.params.id.trim());

    if (!product) {
      return res.status(400).json({
        sucess: false,
        message: 'Failed to update product',
      });
    }
    const deletedImageUrls = deletedImages ?? [];

    const imageUrls = product.images.filter(
      img => !deletedImageUrls.includes(img)
    );

    const newlyAddedImageUrls = req.imageUrls ?? [];
    imageUrls.push(...newlyAddedImageUrls);

    product.name = name ?? product.name;
    product.description = description ?? product.description;
    product.quantity = quantity ?? product.quantity;
    product.images = imageUrls;
    product.category = category ?? product.category;
    product.discount = discount ?? product.discount;

    const updatedProduct = await product.save();

    deleteFilesFromCloud(deletedImageUrls);

    if (updatedProduct) {
      return res.status(200).json({
        sucess: true,
        message: 'Product updated sucessfull',
        product: updatedProduct,
      });
    }

    return res.status(400).json({
      sucess: false,
      message: 'Failed to update product',
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      sucess: false,
      message: 'Failed to update product',
    });
  }
};

module.exports = productController;
