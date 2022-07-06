import React from "react";
// import axios from "axios";

// const [data, setData] = useState([]);

// const fetchTopics = async () => {
//   const res = await axios.get("http://localhost:3001/topic/read");
//   setData(res.data);
// };

const Board = () => {
  return (
    <div className="text-center">
      <h1>Welcome to the Board</h1>

      <h3>
        <h5>Topic: data something</h5>

        <label className="form-label" id="topic-label">
          New Topic:
          <button>Reply</button>
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Please enter a new Topic..."
        />

        <input type="submit" value="Submit" />
      </h3>

      <div class="media">
        {/* <img class="mr-3" src="..." alt="Generic placeholder image" /> */}
        <div class="media-body">
          <h5 class="mt-0">Topic Heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
          <div class="media mt-3">
            {/* <img src="/../assets/images/" alt="Generic placeholder image" /> */}

            <div class="media-body">
              <h5 class="mt-0">Media heading</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
