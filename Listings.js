import React, { useState, useEffect } from "react";
import axios from "axios";

// import "../assets/css/searchbar.css";
import { Link } from "react-router-dom";
// import StripeCheckout from "react-stripe-checkout";

function Listings() {
  const movie = "avengers";

  const [data, setData] = useState("");

  const movieB = "click";

  const [dataB, setDataB] = useState("");

  const movieC = "Memento";

  const [dataC, setDataC] = useState("");

  const movieD = "The%20Boys";

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
      <p id="Listings"></p>
      <div className="row">
        {/* Film A */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center">
          <h2 className="mb-4">{data.Title}</h2>
          <h5>Released: {data.Released}</h5>

          <Link to="/Bookings">
            <img src={data.Poster} alt="The poster" width="40%"></img>
          </Link>
          <h4>{data.Genre}</h4>

          <h5>{data.Plot}</h5>

          <h4>Director: {data.Director}</h4>
        </div>

        {/* Film B */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center">
          <h2>{dataB.Title} </h2>
          <h5>Released: {dataB.Released}</h5>

          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">
              <img src={dataB.Poster} alt="The poster" width="40%" />
            </button>
          </Link>
          <h6>{dataB.Genre}</h6>
          <h6>{dataB.Plot}</h6>
          <h6>Director: {dataB.Director}</h6>
        </div>

        {/* Film C */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center">
          <h2>{dataC.Title} </h2>
          <h5>Released: {dataC.Released}</h5>

          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">
              <img src={dataC.Poster} alt="The poster"></img>
            </button>
          </Link>
          <h4>{dataC.Genre}</h4>

          <h5>{dataC.Plot}</h5>

          <h4>Director: {dataC.Director}</h4>
        </div>

        {/* Film D */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center">
          <h2>{dataD.Title} </h2>
          <h5>Released: {dataD.Released}</h5>

          <Link to="/Bookings">
            <button className="btn btn-outline-secondary">
              <img src={dataD.Poster} alt="The poster"></img>
            </button>
          </Link>
          <h6>{dataD.Genre}</h6>

          <h6>{dataD.Plot}</h6>
          <h6>Actors: {dataD.Actors}</h6>
          <h6>Director: {dataD.Director}</h6>
        </div>
      </div>
    </div>
  );
}

export default Listings;
