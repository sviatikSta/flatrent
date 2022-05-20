const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  rooms: [
    { 
        type: mongoose.Types.ObjectId, 
        ref: 'Room' 
    },
  ]
});

const Hotel = mongoose.model("Hotel", userSchema);
module.exports = Hotel;