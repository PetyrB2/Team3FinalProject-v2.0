import React from "react";
import axios from "axios";

const ReplyPost = ({ Username, Message, _id }) => {
  const deleteReply = async () => {
    axios.delete(`http://localhost:3001/reply/delete/${_id}`).then((res) => {
      console.log(res);
    });
  };


  return (
    <div>
      <h6>Username: {Username}</h6>
      <p>Message: {Message}</p>

      <button type="button" id="delete" onClick={(e) => deleteReply(e)}>
        delete
      </button>
    </div>
  );
};

export default ReplyPost;
