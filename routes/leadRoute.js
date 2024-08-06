const express = require("express");
const router = express.Router();
const { LeadForm } = require("../controllers/leadForm");

// router for adding new lead here

router.post("/addlead", LeadForm);


module.exports = router;