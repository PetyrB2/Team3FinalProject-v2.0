const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema(
    {
      Username: {
        type: String,
        required: true,
      },
      Message: {
        type: String,
        required: true,
      },

      filmName: {
        type: String,
        required: false,
      },
      filmRating: {
        type: Number,
        required: false,
        min: 1,
        max: 10,
      },
      Topic: {
        required: false,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Comment;
