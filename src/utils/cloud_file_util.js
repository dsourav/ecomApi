const cloudinary = require('cloudinary');

cloudinary.v2.config({
  // cloud_name:
});

exports.uplodFileToCloud = async (filePath, folder) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      resource_type: 'auto',
      folder: folder,
    });
    return {
      ...result.url,
      ...result.public_id,
    };
  } catch (error) {
    return {};
  }
};
