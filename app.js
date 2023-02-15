const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./src/routes/auth');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

mongoose.connect(process.env.MONGO_URL);
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(authRoute);

app.use((error, req, res, next) => {
  if (error.status === 404) {
    return res.status(404).json({
      sucess: false,
      error: error.message || 'Not found error',
      statusCode: 404,
    });
  }

  res.status(500).json({
    sucess: false,
    error: error.message || 'Internal server error',
    statusCode: 500,
  });
});

app.listen(PORT, () => {
  console.log('Server is running at port', PORT);
});
