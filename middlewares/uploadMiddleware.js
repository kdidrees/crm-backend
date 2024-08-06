const multer = require("multer");
const path = require("path");

// configure multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/uploads");
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // limit file size upto 10 mb
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("sheet") || file.mimetype.includes("excel")) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
});

module.exports = upload;
