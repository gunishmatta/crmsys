const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  company: {
    type: String,
    maxlength: 50,
    required: true,
  },
  address: {
    type: String,
    maxlength: 100,
    required: true,
  },
  phone: {
    type: String,
    maxlength: 11,
    required: true,
  },
  email: {
    type: String,
    maxlength: 30,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    maxlength: 50,
    required: true,
    minlength: 8,
  },
});

module.exports = {
  userSchema: mongoose.model("User", userSchema),
};
