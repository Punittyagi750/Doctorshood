const mongoose = require("mongoose");

const generateRandomStatus = () => {
  const meetingLinkPattern = "meet.google.com/xyz-abcd-ert";
  const randomString = Math.random().toString(36).substring(2, 8); // Generating a random 6-character string
  return meetingLinkPattern.replace("xyz-abcd-ert", randomString);
};

const schema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: generateRandomStatus(),
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", schema);

module.exports = Appointment;
