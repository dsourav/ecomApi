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

app.listen(PORT, () => {
  console.log('Server is running at port', PORT);
});
