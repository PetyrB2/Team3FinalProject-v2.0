const mongoose = require("mongoose");

const Reply = mongoose.model(
  "Reply",
  new mongoose.Schema({
    Username: {
      type: String,
      required: true,
    },
    Message: {
      type: String,
      required: true,
    },
    Comment: {
      required: false,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  })
);

module.exports = Reply;
