const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("mytable", signUpTemplate);
