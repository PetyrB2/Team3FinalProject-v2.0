const router = require("express").Router();
const Comment = require("../models/CommentSchema");

//create comment using topic id
router.post("/create/:id", (req, res) => {
  const comment = new Comment({
    Username: req.body.Username,
    Message: req.body.Message,
    filmName: req.body.filmName,
    filmRating: req.body.filmRating,
    Topic: req.params.id,
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

//read all commments
router.get("/read", async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (err) {
    res.json({ message: err });
  }
});

//get comments for a topic using topic id
router.get("/read/id/:id", async (req, res) => {
  try {
    const comment = await Comment.find({ Topic: req.params.id });
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

//read comment by id
router.get("/readComment/:id", async (req, res) => {
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
          filmName: req.body.filmName,
          filmRating: req.body.filmRating,
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

module.exports = router;
