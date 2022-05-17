const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  number: {
    type: Number,
  },
  count: {
    type: String,
  },
  hotel: { 
    type: Schema.Types.ObjectId, 
    ref: 'Room' 
  },
  orders

});

const Room = mongoose.model("Room", userSchema);
module.exports = Room;