const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const { BulkLead } = require("../models/leadSchema");

const importLeadsFromExcel = async (filepath) => {
  const workbook = XLSX.readFile(filepath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.json_to_sheet(sheet);

  for (const row of data) {
    await BulkLead.create(row); // clean up the file
  }

  fs.unlinkSync(filepath);
};

module.exports = { importLeadsFromExcel };
