const multer = require('multer');

const diskStorage = multer.memoryStorage();

const filterType = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ??
    file.mimetype === 'image/png' ??
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb({ message: 'Unsupported file format' }, false);
  }
};

const upload = multer({
  limits: {
    files: 5,
    fileSize: 1024 * 1024,
  },
  fileFilter: filterType,
  storage: diskStorage,
});

module.exports = upload;
