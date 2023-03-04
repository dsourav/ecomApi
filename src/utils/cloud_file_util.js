const cloudinary = require('cloudinary');

const cloudFileUtil = {};

cloudFileUtil.uplodFileToCloud = async (filePath, folderName) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      resource_type: 'auto',
      folder: `${process.env.NODE_ENV}/` + folderName,
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    return {};
  }
};
cloudFileUtil.getPublicIdFromImageUrl = imageURL =>
  `${process.env.NODE_ENV}/productImages/` +
  imageURL.split('/').pop().split('.')[0];

cloudFileUtil.deleteFilesFromCloud = async imageUrls => {
  if (Array.isArray(imageUrls)) {
    imageUrls.forEach(img => {
      const publicId = cloudFileUtil.getPublicIdFromImageUrl(img);
      cloudinary.v2.uploader.destroy(publicId);
    });

    return;
  }

  if (typeof imageUrls === 'string') {
    const publicId = cloudFileUtil.getPublicIdFromImageUrl(imageUrls);
    cloudinary.v2.uploader.destroy(publicId);
  }
};

module.exports = cloudFileUtil;
