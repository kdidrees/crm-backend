const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  title: String,
});

const BulkLead = new mongoose.model("bulkleads", leadSchema);

module.exports = { BulkLead };
