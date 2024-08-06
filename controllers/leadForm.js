const LeadModel = require("../models/leadformSchema");

exports.LeadForm = (req, res) => {
  const {
    username,
    email,
    phone,
    source,
    remarks,
    followup,
    followupdate,
    followupremarks,
  } = req.body;

  // create a new lead object

  const newLead = {
    username,
    email,
    phone,
    source,
    remarks,
    followup,
    followupdate,
    followupremarks,
  };

  try {
    // check if the user already exist or not
    LeadModel.findOne({ $or: [{ username, email }] })
      .then((existingLead) => {
        if (existingLead) {
          return res.status(400).json({ msg: "lead already exist" });
        }

        // create and save the new lead
        const lead = new LeadModel(newLead);
        lead
          .save()
          .then((savedLead) => {
            // send a success response with the saved lead
            res.status(201).json(savedLead);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  } catch (error) {}
};
