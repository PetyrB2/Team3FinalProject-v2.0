import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Avengers() {
  const movie = "Avengers";

  const [data, setData] = useState("");

  const fetchMovie = async (movieName, setInfo) => {
    const { data } = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=682f64da&t=" +
        movieName +
        "&plot=full"
    );

    setInfo(data);
  };

  useEffect(() => {
    fetchMovie(movie, setData);
  }, []);

  return (
    <div>
      <div>
        <div className="container col-xxl-8 px-4 py-5 text-white">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={data.Poster}
                className="d-block mx-lg-auto img-fluid"
                alt="Film Poster will Appear Here"
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <hr />
              <h1 className="display-5 fw-bold lh-1 mb-3">Disney Pixar</h1>
              <h6>presents</h6>

              <div className="lead">
                <div className="lead text-uppercase ">
                  <h1 id="search-title"> {data.Title}</h1>
                  <hr />
                </div>

                <div className="small mb-2">
                  <h4>{data.Genre}</h4>
                  <hr />
                  {data.Plot}
                </div>

                <div className="small mb-2">
                  <p>Released: {data.Released}</p>
                  <p>Duration:{data.Runtime}</p>
                  <p>Directed by: {data.Director}</p>
                  <p>Actors/Actresses: {data.Actors}</p>
                  <hr />
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

export default Avengers;
