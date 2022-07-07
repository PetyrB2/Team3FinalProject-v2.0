import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Listings() {
  const movie = "avengers";

  const [data, setData] = useState("");

  const movieB = "click";

  const [dataB, setDataB] = useState("");

  const movieC = "Lightyear";

  const [dataC, setDataC] = useState("");

  const movieD = "Rocky";

  const [dataD, setDataD] = useState("");

  const fetchMovie = async (movieName, setInfo) => {
    const { data } = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=682f64da&t=" + movieName
    );

    setInfo(data);
  };

  useEffect(() => {
    fetchMovie(movie, setData);

    fetchMovie(movieB, setDataB);

    fetchMovie(movieC, setDataC);

    fetchMovie(movieD, setDataD);
  }, []);

  return (
    <div className="Listings">
      <div className="row text-white">
        {/* Film A */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25 bg-dark">
          <h2>{data.Title}</h2>
          <h5>Released: {data.Released}</h5>
          <h6>Duration: {data.Runtime}</h6>
          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">
              <img src={data.Poster} alt="The poster"></img>
            </button>
          </Link>
          <div className="card-text">{data.Genre}</div>

          <h6>{data.Plot}</h6>

          <h4>Director: {data.Director}</h4>
          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">Book Now</button>
          </Link>
        </div>

        {/* Film B */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25 card-title bg-dark">
          <h2>{dataB.Title} </h2>
          <h5>Released: {dataB.Released}</h5>
          <h6>Duration: {dataB.Runtime}</h6>
          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">
              <img src={dataB.Poster} alt="The poster" />
            </button>
          </Link>
          <h6>{dataB.Genre}</h6>
          <h6>{dataB.Plot}</h6>
          <h4>Director: {dataB.Director}</h4>
          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">Book Now</button>
          </Link>
        </div>

        {/* Film C */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25 bg-dark">
          <h2>{dataC.Title} </h2>
          <h5>Released: {dataC.Released}</h5>
          <h6>Duration: {dataC.Runtime}</h6>
          <Link to="/Lightyear">
            <button className="btn btn-outline-secondary">
              <img src={dataC.Poster} alt="The poster"></img>
            </button>
          </Link>
          <h6>{dataC.Genre}</h6>
          <h6>{dataC.Plot}</h6>

          <h4>Director: {dataC.Director}</h4>
          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">Book Now</button>
          </Link>
        </div>

        {/* Film D */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25 bg-dark">
          <h2>{dataD.Title}</h2>
          <h5>Released: {dataD.Released}</h5>
          <h6>Duration: {dataD.Runtime}</h6>
          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">
              <img src={dataD.Poster} alt="The poster"></img>
            </button>
          </Link>
          <br />
          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">Book Now</button>
          </Link>
          <br />
          <h6>{dataD.Genre}</h6>

          <h6>{dataD.Plot}</h6>
          <h6>Actors: {dataD.Actors}</h6>
          <h4>Director: {dataD.Director}</h4>
        </div>
      </div>
    </div>
  );
}

export default Listings;
