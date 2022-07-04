const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const messagesRoutes = require("./routes/Messages");
const topicsRoutes = require("./routes/Topics");
const checkoutRoutes = require("./routes/Stripe");

app.use("/comment", messagesRoutes);
app.use("/topic", topicsRoutes);
app.use("/checkout", checkoutRoutes);

const server = app.listen(3001, () => {
  console.log(
    `Response server started successfully on port number ${
      server.address().port
    }`
  );
});
