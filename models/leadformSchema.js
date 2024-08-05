const mongoose = require("mongoose");

const leadFormSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // Assuming username is required
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures emails are unique
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Email validation
    },
    phone: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      enum: ["website", "offline", "trade show", "indiamart"], // List of possible sources
      required: true,
    },
    remarks: {
      type: String,
      default: "",
    },
    followup: {
      type: String,
      enum: ["callback", "not interested", "dead lead"], // List of possible followup statuses
      required: true,
    },
    followupdate: {
      type: Date,
      default: null, // No date by default
    },
    followupremarks: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Lead = mongoose.model("Lead", leadFormSchema);

module.exports = Lead;
