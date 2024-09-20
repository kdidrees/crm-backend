const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  title: { type: String },
  owner: { type: String },
  contactPerson: { type: String },
  currency: { type: String },
  value: { type: String },
  organization: { type: String },
  sourceChannel: { type: String },
  sourceOrigin: { type: String },
  sourceChannelId: { type: String },
  sourceOriginId: { type: String },
  archiveTime: { type: Date, default: null },
  expectedCloseDate: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
});

const BulkLead = new mongoose.model("bulkleads", leadSchema);

module.exports = { BulkLead };
