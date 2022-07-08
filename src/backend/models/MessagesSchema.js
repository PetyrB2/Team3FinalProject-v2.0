const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const commentSchema = new Schema(
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
    Replies: [
      {
        Username: {
          type: String,
          required: false,
        },
        Message: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//creating and using collection and schema above
const Comment = mongoose.model("Comments", commentSchema);

module.exports = Comment;
