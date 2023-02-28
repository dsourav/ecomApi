const sharp = require('sharp');
const fs = require('fs');

exports.compressImage = async file => {
  try {
    const path = './data/uploads/';
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    const result = await sharp(file.buffer)
      .resize(640, 640, {
        withoutEnlargement: true,
      })
      .toFormat('png')
      .png({
        quality: 90,
      })
      .toFile(path + file.originalname);

    return result;
  } catch (error) {
    return null;
  }
};
