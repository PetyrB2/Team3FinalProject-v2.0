const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const messagesRoutes = require("./routes/Messages");
const topicsRoutes = require("./routes/Topics");
const checkoutRoutes = require("./routes/Stripe");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/DiscussionBoard",
  {
    useNewUrlParser: true,
  },
  function (err) {
    if (err) {
      console.log("error db not connected");
    } else {
      console.log("db connected");
    }
  }
);

app.use("/comment", messagesRoutes);
app.use("/topic", topicsRoutes);
app.use("/checkout", checkoutRoutes);



const server = app.listen(3000, () => {
  console.log(
    `Response server started successfully on port number ${
      server.address().port
    }`
  );
});

module.exports = server;
