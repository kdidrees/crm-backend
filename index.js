const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config("./env");

const app = express();
// use middleware here
app.use(express.json());
app.use(cors(''))



app.listen(process.env.PORT, () => {
  console.log(`server running at port number ${process.env.PORT}`);
});
