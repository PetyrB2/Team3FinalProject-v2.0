import { useState } from "react";
import axios from "axios";

function App() {
  const [titleState, setTitleState] = useState("Enter a movie title below");
  const [data, setData] = useState("");
  const fetchMovie = async () => {
    const { data } = await axios.get(
      //api key here

      "http://www.omdbapi.com/?i=tt3896198&apikey=682f64da&t=" + titleState
    );

    setData(data);
  };

  return (
    <div>
      <div>
        <div className="container col-xxl-8 px-4 py-5 text-white">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={data.Poster}
                className="d-block mx-lg-auto img-fluid"
                alt=""
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                <div className="lead fw-bold">
                  <input
                    type="text"
                    placeholder="Film Search"
                    onChange={(e) => setTitleState(e.target.value)}
                  ></input>
                  <button
                    type="button"
                    onClick={(e) => fetchMovie(e)}
                    className="btn btn-success btn-med px-4 me-md-2"
                  >
                    Search
                  </button>
                </div>
              </h1>
              <hr />
              <div className="lead">
                <div className="lead text-uppercase ">
                  <h1 id="search-title"> {data.Title}</h1>
                  <hr />
                </div>
                <div className="small mb-2">
                  <h6>Duration: {data.Runtime} </h6>
                </div>

                <div className="small mb-2">
                  <h4>{data.Genre}</h4>
                  {data.Plot}
                </div>

                <div className="small mb-2">
                  Released: {data.Released}
                  <p>By Director: {data.Director}</p>
                  <p>Actors: {data.Actors}</p>
                  <p>BoxOffice: {data.BoxOffice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
