const router = require("express").Router();
const Reply = require("../models/ReplySchema");

//create a reply using comment id
router.post("/create/:id", async (req, res) => {
  const reply = new Reply({
    Username: req.body.Username,
    Message: req.body.Message,
    Comment: req.params.id,
  });
  reply
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

router.get("/read", async (req, res) => {
  try {
    const reply = await Reply.find();
    res.status(200).json(reply);
  } catch (err) {
    res.json({ message: err });
  }
});

//get replies for a comment using comment id
router.get("/read/id/:id", async (req, res) => {
  try {
    const reply = await Reply.find({ Comment: req.params.id });
    res.status(200).json(reply);
  } catch (err) {
    res.json({ message: err });
  }
});

// //update a reply using reply id
router.put("/update/:id", async (req, res) => {
  try {
    const updatedReply = await Reply.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Message: req.body.Message,
        },
      }
    );
    res.status(200).json(updatedReply);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete reply by id
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedReply = await Reply.remove({ _id: req.params.id });
    res.status(204).json(deletedReply);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
