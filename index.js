const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const leadRoute = require("./routes/leadRoute");

dotenv.config("./env");

const app = express();

// use middleware here
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// connect database here

ConnectDatabase();
async function ConnectDatabase() {
  await mongoose.connect("mongodb://localhost:27017/crm");

  console.log("database connected");
}

app.use("/api/leads", leadRoute);

app.listen(process.env.PORT, () => {
  console.log(`server running at port number ${process.env.PORT}`);
});
