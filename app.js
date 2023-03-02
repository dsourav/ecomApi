const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');

const authRoute = require('./src/routes/auth_router.js');
const productRoute = require('./src/routes/product_router');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL);
const PORT = process.env.PORT;

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(authRoute);
app.use(productRoute);

app.use((error, req, res, next) => {
  if (error.status === 404) {
    return res.status(404).json({
      sucess: false,
      error: error.message ?? 'Not found error',
      statusCode: 404,
    });
  }

  res.status(500).json({
    sucess: false,
    error: error.message ?? 'Internal server error',
    statusCode: 500,
  });
});

app.listen(PORT, () => {
  console.log('Server is running at port', PORT);
});
