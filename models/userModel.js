const mongoose = require("mongoose");

const generateRandomStatus = () => {
  const meetingLinkPattern = "meet.google.com/xyz-abcd-ert";
  const randomString = Math.random().toString(36).substring(2, 8); // Generating a random 6-character string
  return meetingLinkPattern.replace("xyz-abcd-ert", randomString);
};

const schema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      minLength: 3,
    },
    lastname: {
      type: String,
      required: true,
      minLength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    age: {
      type: Number,
      default: "",
    },
    gender: {
      type: String,
      default: "neither",
    },
    mobile: {
      type: Number,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: generateRandomStatus(),
    },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", schema);

module.exports = User;
