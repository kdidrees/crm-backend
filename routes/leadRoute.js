const express = require("express");
const router = express.Router();
const { LeadForm } = require("../controllers/leadForm");
const {uploadFile} = require("../controllers/Bulklead");
const {upload} = require("../middlewares/uploadMiddleware")

// router for adding new lead here

router.post("/addlead", LeadForm);


// route for file upload 
router.post('/upload',upload.single('file'),uploadFile)

module.exports = router;