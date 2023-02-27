const { Router } = require('express');

const auth = require('../middlewares/auth');
const addminChecker = require('../middlewares/admin_checker');
const { addProductRules } = require('../validations/product_validator');
const validate = require('../middlewares/input_validator');
const localFileUpload = require('../utils/file_upload_util');
const cloudFileHandler = require('../middlewares/cloud_file_handler');
const { addProduct } = require('../controllers/product_controller');

const productRouter = Router();

productRouter.post(
  '/api/addProduct',
  auth,
  addminChecker,
  localFileUpload.array('image'),
  cloudFileHandler,
  addProductRules(),
  validate,
  addProduct
);

module.exports = productRouter;
