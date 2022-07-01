const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const messagesRoutes = require("./routes/Messages");
const topicsRoutes = require("./routes/Topics");
const usersRoutes = require("./routes/Users");

app.use("/comment", messagesRoutes);
app.use("/topic", topicsRoutes);
app.use("/user", usersRoutes);

const server = app.listen(3000, () => {
  console.log(
    `Response server started successfully on port number ${
      server.address().port
    }`
  );
});
