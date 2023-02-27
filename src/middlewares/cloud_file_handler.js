const fs = require('fs');

const imageCompressor = require('../utils/image_compressor');
const cloudFileUploader = require('../utils/cloud_file_util');

const cloudFileHandler = async (req, res, next) => {
  try {
    if (req.files) {
      const imageUrlList = [];
      for (index in req.files) {
        const compressedFile = await imageCompressor.compressImage(
          req.files[index].path
        );
        const filePath = compressedFile.path;
        const { url } = await cloudFileUploader(filePath, 'productImages');
        fs.unlinkSync(filePath);
        if (url) {
          imageUrlList.push({ url });
        }
      }
      req.imageUrls = imageUrlList;
      next();
    } else {
      next();
    }
  } catch (error) {
    next();
  }
};

module.exports = cloudFileHandler;
