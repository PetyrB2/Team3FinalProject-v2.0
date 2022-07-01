const router = require("express").Router();

//create (if !exists) and connect to db
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
      console.log("users db connected");
    }
  }
);

//create schema for db

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 20,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
      maxLength: 50,
    },
    Username: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
      maxLength: 20,
    },
    Password: {
      type: String,
      required: true,
      minLength: 7,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

//creating and using collection and schema above
const User = mongoose.model("Users", userSchema);

//create user
router.post("/create", (req, res) => {
  const user = new User({
    Name: req.body.Name,
    Email: req.body.Email,
    Username: req.body.Username,
    Password: req.body.Password,
  });
  user
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//read all users
router.get("/read", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//read by user id
router.get("/read/id/:id", async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//read by user name
router.get("/read/name/:name", async (req, res) => {
  try {
    const user = await User.find({ User: req.params.name }).collation({
      locale: "en",
      strength: 2,
    });
    //collation for case insensitive search
    res.status(200).json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a user
router.put("/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Username: req.body.User,
          Password: req.body.Password,
        },
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a user
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedUser = await User.remove({ _id: req.params.id });
    res.status(204).json(deletedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
