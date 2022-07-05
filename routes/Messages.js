const router = require("express").Router();

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
      console.log("messages db connected");
    }
  }
);

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

//create comment
router.post("/create", (req, res) => {
  const comment = new Comment({
    Username: req.body.Username,
    Message: req.body.Message,
    filmName: req.body.filmName,
    filmRating: req.body.filmRating,
  });
  comment
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//create a reply
router.patch("/reply/:id", async (req, res) => {
  try {
    const replyComment = await Comment.updateOne(
      { _id: req.params.id },
      {
        $push: {
          Replies: req.body.Replies,
        },
      }
    );
    res.status(200).json(replyComment);
  } catch (err) {
    res.json({ message: err });
  }
});

//read all commments
router.get("/read", async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (err) {
    res.json({ message: err });
  }
});

//read by comment by username
router.get("/read/username/:username", async (req, res) => {
  try {
    const comment = await Comment.find({
      Username: req.params.username,
    }).collation({
      locale: "en",
      strength: 2,
    });
    //collation for case insensitive search
    res.status(200).json(comment);
  } catch (err) {
    res.json({ message: err });
  }
});


router.get("/read/id/:id", async (req, res) => {
  try {
    const comment = await Comment.find({ _id: req.params.id });
    res.status(200).json(comment);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a comment
router.put("/update/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Message: req.body.Message,
          Film_Name: req.body.Film_Name,
          Film_Rating: req.body.Film_Rating,
        },
      }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete comment by id
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.remove({ _id: req.params.id });
    res.status(204).json(deletedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete reply by id
router.patch("/reply/delete/:id", async (req, res) => {
  try {
   const replies =  Comment.find({ _id: req.params.id },{Replies:true})

    const deletedReply = await Comment.updateOne(
      { _id: req.params.id },
      {
        $pull: {
          Replies: [{ _id: req.body._id }],
        },
      },
      false,
      true
    );
    res.status(200).json(deletedReply);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;