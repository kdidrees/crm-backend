// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const leadSchema = new mongoose.Schema({
//   title: { type: String },
//   nextActivity: { type: String },
//   labels:[{ type: Schema.Types.ObjectId}],
//   sourceOrigin: { type: String },
//   leadCreated: { type: String },
//   owner: { type: String },
//   contactPerson: { type: String },
//   creator: { type: String },
//   currency: { type: String },
//   id: { type: String },
//   updateTime: { type: String },
//   value: { type: String },
//   organization: { type: String },
//   sourceChannel: { type: String },
//   sourceChannelId: { type: String },
//   sourceOriginlId: { type: String },
//   visibleTo: { type: String },
//   archiveTime: { type: String },
//   contact:{type:Object},
//   contactId:{ type: Schema.Types.ObjectId  },
//   deletedAt: { type: Date, default: null } // Field for soft delete

// },{ timestamps: true });

// const LeadModel = new mongoose.model("lead", leadSchema);

// module.exports = LeadModel;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const leadSchema = new mongoose.Schema(
  {
    title: { type: String },
    labels: [{ type: Schema.Types.ObjectId }],
    owner: { type: String },
    contactPerson: { type: String },
    id: { type: String },
    currency: { type: String }, 
    value: { type: String },
    organization: { type: String },
    sourceChannel: { type: String },
    sourceOrigin: { type: String },
    sourceChannelId: { type: String },
    sourceOriginId: { type: String },
    archiveTime: { type: Date, default: null }, // archiveTime default to null
    contactId: { type: Schema.Types.ObjectId },
    expectedCloseDate: { type: Date, default: null },
    deletedAt: { type: Date, default: null }, // Field for soft delete
  },
  { timestamps: true }
);

// Add archive functionality as an instance method
leadSchema.methods.archive = function () {
  this.archiveTime = new Date(); // Set archive time to the current date/time
  return this.save(); // Save the lead with the updated archiveTime
};

const LeadModel = mongoose.model("lead", leadSchema);

module.exports = LeadModel;