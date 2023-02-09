const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

mongoose.connect(process.env.MONGO_URL);

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
// app.use()

app.listen(PORT, () => {
  console.log('Server is running at port', PORT);
});
