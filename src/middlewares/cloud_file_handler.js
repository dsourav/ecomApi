const fs = require('fs');
const path = require('path');

const imageCompressor = require('../utils/image_compressor');
const cloudFileUploader = require('../utils/cloud_file_util');

const cloudFileHandler = async (req, res, next) => {
  try {
    if (req.files) {
      const imageUrlList = [];

      for (index in req.files) {
        const compressedFile = await imageCompressor.compressImage(
          req.files[index]
        );

        if (!compressedFile) {
          return next();
        }

        const filePath = path.join(
          __dirname + '../../../data/uploads',
          req.files[index].originalname
        );

        const { url } = await cloudFileUploader(filePath, 'productImages');
        fs.unlinkSync(filePath);

        if (url) {
          imageUrlList.push({ url });
        }
      }
      req.imageUrls = imageUrlList;
    }
  } catch (error) {}
  next();
};

module.exports = cloudFileHandler;
