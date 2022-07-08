const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const topicSchema = new Schema(
  {
    Topic: {
      type: String,
      required: true,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

//creating and using collection and schema above
const Topic = mongoose.model("Topics", topicSchema);

module.exports = Topic;
