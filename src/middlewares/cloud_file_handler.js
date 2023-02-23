const cloudFileUploader = require('../utils/cloud_file_util');

const cloudFileHandler = async (req, res, next) => {
  if (res.files.isNotEmpty()) {
    const imageUrlList = [];
    for (file in files) {
      const { url, public_id } = await cloudFileUploader(file, 'productImages');
      if (url) {
        imageUrlList.push(url);
      }
    }
    req.imageUrls = imageUrlList;
    next();
  } else {
    next();
  }
};

module.exports = cloudFileHandler;
