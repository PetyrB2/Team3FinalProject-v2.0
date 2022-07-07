import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentPost from "./CommentPost";

const TopicPost = ({ Topic, _id }) => {
  const deleteTopic = async () => {
    axios.delete(`http://localhost:3001/topic/delete/${_id}`).then((res) => {
      console.log(res);
    });
  };

  const [usernameState, setUsernameState] = useState("");
  const [MessageState, setMessageState] = useState("");
  const [filmNameState, setfilmNameState] = useState("");
  const [filmRatingState, setfilmRatingState] = useState("");
  const [commentData, setCommentData] = useState([]);

  const createComment = () => {
    axios.post(`http://localhost:3001/comment/create/${_id}`, {
      Username: usernameState,
      Message: MessageState,
      filmName: filmNameState,
      filmRating: filmRatingState,
    });
  };

  //   fetch comments for the topic
  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/comment/read/id/${_id}`
    );
    setCommentData(data);
  };

  // Our Use Effects

  useEffect(() => {
    fetchComments();
  }, [createComment]);

  return (
    <div className="text-white">
      <center>
        <hr />
        <h4>{Topic}</h4>
        <hr />
        <table className="table text-center border shadow text-white bg-dark w-50">
          <thead>
            <tr>
              <th scope="col">Topic</th>
              <th scope="col">Comments</th>
              <th scope="col">Button Area</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-info">
              <td scope="row">{Topic}</td>

              <td>
                {commentData.map(
                  ({ Username, Message, filmName, filmRating, _id }) => (
                    <CommentPost
                      Username={Username}
                      Message={Message}
                      filmName={filmName}
                      filmRating={filmRating}
                      _id={_id}
                      key={_id}
                    />
                  )
                )}
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter your Username"
                  onChange={(e) => setUsernameState(e.target.value)}
                ></input>
                <br />
                <input
                  type="text"
                  placeholder="Film Name"
                  onChange={(e) => setfilmNameState(e.target.value)}
                ></input>
                <select
                  type="Number"
                  placeholder="filmRating"
                  onChange={(e) => setfilmRatingState(e.target.value)}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

                <br />
                <input
                  type="text"
                  placeholder="Enter a Message"
                  onChange={(e) => setMessageState(e.target.value)}
                ></input>
                <hr />
                <button
                  className="btn btn-sn-primary"
                  type="button"
                  onClick={(e) => createComment(e)}
                >
                  Post Comment
                </button>
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={(e) => deleteTopic(e)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default TopicPost;
