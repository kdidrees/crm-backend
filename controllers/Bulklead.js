const path = require("path");
const { importLeadsFromExcel } = require("../utils/importLeads");
const fs = require("fs");

const uploadFile = async (req, res) => {
  const file = req.file?.filename;
  const headers = JSON.parse(req.body.headers); 
  const final_headers = Object.values(headers);

  console.log(final_headers,'final header hai ');

  if (!file) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  try {
    const filePath = path.resolve(__dirname, "..", "uploads", file);

    // console.log(__dirname,'kd dirname here')

    // console.log(filePath,'kd path here')

    await importLeadsFromExcel(filePath,final_headers);

   

    res.status(200).json({ msg: "file processed successfully" });
  } catch (error) {
    res.status(500).json({ msg: "error processing file", error: error.msg });
  }
};

module.exports = { uploadFile };
