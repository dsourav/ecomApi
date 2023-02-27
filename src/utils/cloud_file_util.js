const cloudinary = require('cloudinary');

const uplodFileToCloud = async (filePath, folderName) => {
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

module.exports = uplodFileToCloud;
