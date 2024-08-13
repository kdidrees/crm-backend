const XLSX = require("xlsx");
const fs = require("fs");
const { BulkLead } = require("../models/leadSchema");

const importLeadsFromExcel = async (filePath) => {
  try {
    // Read the file
    const workbook = XLSX.readFile(filePath);

    // Get the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet to JSON
    const data = XLSX.utils.sheet_to_json(sheet, { header: ['name','email','phone'] });

    console.log("Imported data:", data); // Log data for debugging

    // Process data and save to database
    // For example: await Lead.insertMany(data);

 

    await BulkLead.insertMany(data);
  } catch (error) {
    console.error("Error reading file:", error);
    throw new Error("Error reading file");
  }
};

module.exports = { importLeadsFromExcel };
