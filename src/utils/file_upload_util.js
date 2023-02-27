const multer = require('multer');

const diskStorage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    var extension = file.fieldname.split('.').pop();
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  },
});

const filterType = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
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
