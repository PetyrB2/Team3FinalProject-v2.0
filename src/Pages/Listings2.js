import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Listings2() {
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
    <div className="Listings container">
      <div className="col-lg text-white">
        {/* Film A */}
        <div className="col-lg-10 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-80 bg-dark">
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
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-45 card-title bg-dark">
          <h2>{dataB.Title} </h2>
          <hr />
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
            <br />
          </Link>
        </div>
        <hr />
        <br />
      </div>

      <div id="row-index-1" className="row countdown-item">
        <div className="countdown-index-resposive">#1</div>
        <div className="col-sm-6 col-full-xs">
          <a
            className="article_movie_poster"
            href="https://www.rottentomatoes.com/m/minions_the_rise_of_gru"
          >
            <div>
              <img
                className="article_poster"
                src="https://resizing.flixster.com/iNEeL_9Gqxf4QRepMO5xUzziyN4=/fit-in/180x240/v2/https://resizing.flixster.com/s2eQM6eCyFOAYE_jOckLuj7op84=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBkOGQzNDU5LWQ0YjgtNDczNi1hNmE1LWI1ZWFjY2QxZTNlYS5qcGc="
                alt="something"
                sborder=""
              />
            </div>
          </a>
        </div>
        <div className="col-sm-18 col-full-xs countdown-item-content">
          <div className="row countdown-item-title-bar">
            <div className="col-sm-20 col-full-xs">
              <div className="article_movie_title">
                <div>
                  <h2>
                    <a href="https://www.rottentomatoes.com/m/minions_the_rise_of_gru">
                      Minions: The Rise of Gru
                    </a>{" "}
                    <span className="subtle start-year">(2022)</span>
                    <br />
                    <span title="Fresh" className="icon tiny fresh"></span>{" "}
                    <span className="tMeterScore">73%</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-full-xs">
              <div className="countdown-index">#1</div>
            </div>
          </div>
          <div className="row countdown-item-details">
            <div className="col-sm-24">
              <div className="info countdown-adjusted-score">
                <span className="descriptor">Adjusted Score: </span>79311%{" "}
                <span
                  className="glyphicon glyphicon-question-sign"
                  rel="tooltip"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-html="true"
                  title=""
                  data-original-title="The Adjusted Score comes from a weighted formula (Bayesian) that we use that accounts for variation in the number of reviews per movie."
                ></span>
              </div>
              <div className="info critics-consensus">
                <span className="descriptor">Critics Consensus:</span> The{" "}
                <em>Minions</em>' antic shenanigans are beginning to grate
                despite this sequel's injection of retro chic, although this
                loony marathon of gags will still delight young children.
              </div>
              <div className="info synopsis">
                <span className="descriptor">Synopsis:</span> In the heart of
                the 1970s, amid a flurry of feathered hair and flared jeans, Gru
                (Oscar® nominee Steve Carell)...
                <a
                  className=""
                  target="_top"
                  data-pageheader=""
                  href="https://www.rottentomatoes.com/m/minions_the_rise_of_gru"
                >
                  {" "}
                  [More]
                </a>
              </div>
              <div className="info cast">
                <span className="descriptor">Starring:</span>{" "}
                <a
                  className=""
                  href="//www.rottentomatoes.com/celebrity/steve_carell"
                >
                  Steve Carell
                </a>
                ,{" "}
                <a
                  className=""
                  href="//www.rottentomatoes.com/celebrity/taraji_henson"
                >
                  Taraji P. Henson
                </a>
                ,{" "}
                <a
                  className=""
                  href="//www.rottentomatoes.com/celebrity/michelle-yeoh"
                >
                  Michelle Yeoh
                </a>
                ,{" "}
                <a className="" href="//www.rottentomatoes.com/celebrity/rza">
                  RZA
                </a>
              </div>
              <div className="info director">
                <span className="descriptor">Directed By:</span>{" "}
                <a
                  className=""
                  href="//www.rottentomatoes.com/celebrity/kyle_balda"
                >
                  Kyle Balda
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listings2;

// {/* Film C */}
// <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25 bg-dark">
//   <h2>{dataC.Title} </h2>
//   <h5>Released: {dataC.Released}</h5>
//   <h6>Duration: {dataC.Runtime}</h6>
//   <Link to="/Lightyear">
//     <button className="btn btn-outline-secondary">
//       <img src={dataC.Poster} alt="The poster"></img>
//     </button>
//   </Link>
//   <h6>{dataC.Genre}</h6>
//   <h6>{dataC.Plot}</h6>

//   <h4>Director: {dataC.Director}</h4>
//   <Link to="/Bookings">
//     <button className="btn btn-outline-secondary">Book Now</button>
//   </Link>
// </div>

// {/* Film D */}
// <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25 bg-dark">
//   <h2>{dataD.Title}</h2>
//   <h5>Released: {dataD.Released}</h5>
//   <h6>Duration: {dataD.Runtime}</h6>
//   <Link to="/Bookings">
//     <button className="btn btn-outline-secondary">
//       <img src={dataD.Poster} alt="The poster"></img>
//     </button>
//   </Link>
//   <br />
//   <Link to="/Bookings">
//     <button className="btn btn-outline-secondary">Book Now</button>
//   </Link>
//   <br />
//   <h6>{dataD.Genre}</h6>

//   <h6>{dataD.Plot}</h6>
//   <h6>Actors: {dataD.Actors}</h6>
//   <h4>Director: {dataD.Director}</h4>
// </div>
