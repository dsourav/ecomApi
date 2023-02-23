const sharp = require('sharp');

exports.compressImage = async filePath => {
  try {
    const file = await sharp(filePath).resize(640, 640).png().toFile(filePath);
    return file;
  } catch (error) {
    return null;
  }
};
