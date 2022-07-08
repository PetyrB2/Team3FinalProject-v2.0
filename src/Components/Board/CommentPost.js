import React, { useState, useEffect } from "react";
import axios from "axios";
import ReplyPost from "./ReplyPost";

const CommentPost = ({ Username, Message, filmName, filmRating, _id }) => {
  const deleteComment = async () => {
    axios.delete(`http://localhost:3001/comment/delete/${_id}`).then((res) => {
      console.log(res);
    });
  };

  const [usernameState, setUsernameState] = useState("");
  const [MessageState, setMessageState] = useState("");
  const [replyData, setReplytData] = useState([]);

  const createReply = () => {
    axios.post(`http://localhost:3001/reply/create/${_id}`, {
      Username: usernameState,
      Message: MessageState,
    });
  };

  //   fetch replies for a comment
  const fetchReplies = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/reply/read/id/${_id}`
    );
    setReplytData(data);
  };

  useEffect(() => {
    fetchReplies();
  }, [createReply]);

  return (
    <div className="bg-info">
      <h6>
        Username: {Username} {"   "}
        <button
          className="btn btn-dark"
          type="button"
          id="delete"
          onClick={(e) => deleteComment(e)}
        >
          Delete
        </button>
      </h6>
      <h6>Message: {Message}</h6>
      <h6>Film Name: {filmName}</h6>
      <h6>Rating: {filmRating}</h6>

      <br />
      <input
        type="text"
        placeholder="Username"
        required="required"
        onChange={(e) => setUsernameState(e.target.value)}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Message"
        required="required"
        onChange={(e) => setMessageState(e.target.value)}
      ></input>

      <hr />

      <div className=" text-center">
        <button
          className="btn btn-sm btn-warning"
          type="button"
          onClick={(e) => createReply(e)}
          required
        >
          Post Reply
        </button>
      </div>
      <br />
      {replyData.map(({ Username, Message, filmName, filmRating, _id }) => (
        <ReplyPost
          Username={Username}
          Message={Message}
          filmName={filmName}
          filmRating={filmRating}
          _id={_id}
          key={_id}
        />
      ))}
      <br />
    </div>
  );
};

export default CommentPost;
