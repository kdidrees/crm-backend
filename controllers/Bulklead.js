const path = require("path");
const { importLeadsFromExcel } = require("../utils/importLeads");

const uploadFile = async (req, res) => {
  try {
    const filePath = path.resolve(
      __dirname,
      "..",
      "uploads",
      req.file.filename
    );

    console.log(__dirname, "kd dirname here");

    console.log(filePath, "kd path here");

    await importLeadsFromExcel(filePath);
    res.status(200).json({ msg: "file processed successfully" });
  } catch (error) {
    res.status(500).json({ msg: "error processing file", error: error.msg });
  }
};

module.exports = { uploadFile };
