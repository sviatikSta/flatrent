const {
    model,
    Schema,
    Schema: {
      Types: { ObjectId },
    },
  } = require("mongoose");
  
  const schema = new Schema({
    dateFrom: {
      type: String,
      default: "",
    },
    toDate: {
      type: String,
      default: "",
    },
    room: 
    {
      type: ObjectId,
      ref: "Room",
    },
    user: {
      type: ObjectId,
      ref: "User",
    }
  });
  
  module.exports = model("Category", schema);
  