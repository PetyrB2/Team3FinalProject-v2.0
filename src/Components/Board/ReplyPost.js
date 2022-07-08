import React from "react";
import axios from "axios";

const ReplyPost = ({ Username, Message, _id }) => {
  const deleteReply = async () => {
    axios.delete(`http://localhost:3001/reply/delete/${_id}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="table text-white text-left" style={{ background: "teal" }}>
      <hr />
      <h6>Username: {Username}</h6>
      <h6>Message: {Message}</h6>
      <hr />
      <button
        type="button"
        className="btn btn-secondary"
        id="delete"
        onClick={(e) => deleteReply(e)}
      >
        Delete
      </button>
    </div>
  );
};

export default ReplyPost;
