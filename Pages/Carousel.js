import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Carousel() {
  const movie = "Minions the rise of Gru";

  const [data, setData] = useState("");

  const movieB = "Lightyear";

  const [dataB, setDataB] = useState("");

  const movieC = "Black Phone";

  const [dataC, setDataC] = useState("");

  const movieD = "Thor";

  const [dataD, setDataD] = useState("");

  const movieE = "avatar the way of water";

  const [dataE, setDataE] = useState("");

  const movieF = "qw";

  const [dataF, setDataF] = useState("");

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

    fetchMovie(movieE, setDataE);

    fetchMovie(movieF, setDataF);
  }, []);

  // const options = {
  //   items: 4,
  // };

  return (
    <div className="container ">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        autoplay
        autoplayHoverPause
      >
        <div className="item">
          <img src={data.Poster} alt="The poster"></img>
        </div>
        <div className="item">
          <Link to="/Lightyear">
            <img src={dataB.Poster} alt="Lightyear"></img>
          </Link>
        </div>
        <div className="item">
          <img src={dataC.Poster} alt="The poster"></img>
        </div>
        <div className="item">
          <img src={dataD.Poster} alt="The poster"></img>
        </div>
        <div className="item">
          <img src={dataE.Poster} alt="The poster"></img>
        </div>
        <div className="item">
          <img src={dataF.Poster} alt="The poster"></img>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Carousel;
