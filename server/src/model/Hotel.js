const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
  },
  rooms: [
    { 
        type: Schema.Types.ObjectId, 
        ref: 'Room' 
    },
  ]
});

const Hotel = mongoose.model("Hotel", userSchema);
module.exports = Hotel;