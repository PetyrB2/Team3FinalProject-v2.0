const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const checkoutSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    film: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
    cart: [
      {
        id: {
          type: Number,
          required: true,
        },
        quatity: {
          type: Number,
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
const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = Checkout;
