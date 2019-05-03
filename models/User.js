const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  UserID: String,
  User: String,
  Code: {
    type: String,
    default: "0000"
  },
  Admin: {
    type: Boolean,
    default: false
  },
  firstName: {
    type: String,
    default: "first Name"
  },
  lastName: {
    type: String,
    default: "Last Name"
  },
  dateOfBirth: {
    type: String,
    default: "xx/xx/xx"
  },
  CIN: {
    type: String,
    default: "xxxx"
  },
  phone: {
    type: String,
    default: "0000"
  },
  email: {
    type: String,
    default: "email@domaine.com"
  },
  address: {
    type: String,
    default: "Address"
  },
  zipCode: {
    type: String,
    default: "Zip Code"
  }
});

mongoose.model("users", UserSchema);
