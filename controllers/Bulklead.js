const path = require("path");
const { importLeadsFromExcel } = require("../utils/importLeads");

const uploadFile = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../", req.file.path);
    await importLeadsFromExcel(filePath);
    res.status(200).json({ msg: "file processed successfully" });
  } catch (error) {
    res.status(500).json({ msg: "error processing file", error: error.msg });
  }
};

module.exports = {uploadFile};
