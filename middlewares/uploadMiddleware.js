const path = require("path");
const multer = require("multer");

// configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Resolve the uploads folder path
    cb(null, path.join(__dirname, "../uploads"));
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // limit file size up to 10 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("sheet") || file.mimetype.includes("excel")) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
});

module.exports = { upload };
