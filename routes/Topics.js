const router = require("express").Router();
const Topic = require("../models/TopicsSchema");

//create topic
router.post("/create", (req, res) => {
  const topic = new Topic({
    Topic: req.body.Topic,
  });
  topic
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//read all topics
router.get("/read", async (req, res) =>  {
  try {
    const topic = await Topic.find();
    res.status(200).json(topic);
  } catch (err) {
    res.json({ message: err });
  }
});

//read by topic id
router.get("/read/id/:id", async (req, res) => {
  try {
    const topic = await Topic.find({ _id: req.params.id });
    res.status(200).json(topic);
  } catch (err) {
    res.json({ message: err });
  }
});

//read by topic name
router.get("/read/name/:name", async (req, res) => {
  try {
    const topic = await Topic.find({ Topic: req.params.name }).collation({
      locale: "en",
      strength: 2,
    });
    //collation for case insensitive search
    res.status(200).json(topic);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a topic
router.put("/update/:id", async (req, res) => {
  try {
    const updatedTopic = await Topic.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Topic: req.body.Topic,
        },
      }
    );
    res.status(200).json(updatedTopic);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a topic
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTopic = await Topic.remove({ _id: req.params.id });
    res.status(204).json(deletedTopic);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
