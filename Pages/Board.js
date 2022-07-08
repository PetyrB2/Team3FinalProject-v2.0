import axios from "axios";
import React, { useState, useEffect } from "react";
import TopicPost from "./../Components/Board/TopicPost";

const Board = () => {
  const [topicState, setTopicState] = useState("");
  const [topicData, setTopicData] = useState([]);

  const createTopic = () => {
    axios.post("http://localhost:3001/topic/create", {
      Topic: topicState,
    });
  };

  //read all the topics

  const fetchTopics = async () => {
    const { data } = await axios.get("http://localhost:3001/topic/read");
    setTopicData(data);
  };

  useEffect(() => {
    fetchTopics();
  }, [createTopic]);

  return (
    <div className="Board text-center  ">
      <div className="lead text-white">Welcome to the Board</div>
      <hr />
      <center>
        <div className="col-sm-6">
          <input
            id="topic"
            type="text"
            placeholder="Enter Topic"
            required="required"
            onChange={(e) => setTopicState(e.target.value)}
          ></input>
          <button type="button" id="create" onClick={(e) => createTopic(e)}>
            Post
          </button>
        </div>
      </center>

      {topicData.map(({ Topic, _id }) => (
        <TopicPost Topic={Topic} _id={_id} key={_id} />
      ))}

      {/* {topicData.map(({ Topic, _id }) => (
        <TopicPost Topic={Topic} _id={_id} key={_id} />
      ))} */}
    </div>
  );
};

export default Board;
