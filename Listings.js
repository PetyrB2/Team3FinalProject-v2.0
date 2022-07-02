import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/searchbar.css";
import { Link } from "react-router-dom";
// import StripeCheckout from "react-stripe-checkout";

function Listings() {

  const [titleState, setTitleState] = useState("Enter a movie title below");
  const [data, setData] = useState("");
  const fetchMovie = async () => {

    const { data } = await axios.get(

      //api key here -***682f64da

      "http://www.omdbapi.com/?i=tt3896198&apikey=682f64da&t=Avengers"

    );

    setData(data);



  };

  useEffect(() => {
    fetchMovie();

  }, [])

  return (

    <div className="Listings">


      {/* <h2>{data.Title}</h2>
             */}
      {/* <StripeCheckout stripeKey="" token="" name="Buy Your Ticket">
            <button className="btn-large blue"></button>
            </StripeCheckout> */}

      {/* <img src={data.Poster} alt="The poster" width='20%'></img>

            <h5>Release date: {data.Released}</h5>

            <h4>Director: {data.Director}</h4> */}

      {/* <h4>{data.Genre}</h4>

            <h5>{data.Plot}</h5>

            <h5>Rated: {data.Rated}</h5>
            <h6>IMdb: {data.imdbRating}/10</h6> */}

      <table>
        <colgroup>
          <col span="2" />
          <col />
        </colgroup>
        <tr>
          <th> <h2>{data.Title}</h2></th>
          <th> <h2>{data.Title}</h2></th>
          <th> <h2>{data.Title}</h2></th>
          <th> <h2>{data.Title}</h2></th>
        </tr>
        <tr >
          <td>
            <Link to="/Bookings"><button type="button" className="btn btn-outline-secondary">
              <img src={data.Poster} alt="The poster"></img></button>
            </Link>
          </td>
          <td>
            <Link to="/Bookings"><button type="button" className="btn btn-outline-secondary">
              <img src={data.Poster} alt="The poster"></img></button>
            </Link>
          </td>
          <td>
            <Link to="/Bookings"><button type="button" className="btn btn-outline-secondary">
              <img src={data.Poster} alt="The poster"></img></button>
            </Link>
          </td>
          <td>
            <Link to="/Bookings"><button type="button" className="btn btn-outline-secondary">
              <img src={data.Poster} alt="The poster"></img></button>
            </Link>
          </td>
        </tr>
        <tr>
          <td><h5>Released: {data.Released}</h5></td>
          <td><h5>Released: {data.Released}</h5></td>
          <td><h5>Released: {data.Released}</h5></td>
          <td><h5>Released: {data.Released}</h5></td>
        </tr>
        <tr>
          <td> <h4>{data.Genre}</h4> </td>
          <td> <h4>{data.Genre}</h4> </td>
          <td> <h4>{data.Genre}</h4> </td>
          <td> <h4>{data.Genre}</h4> </td>
        </tr>
        <tr>
          <td><h5>{data.Plot}</h5></td>
          <td><h5>{data.Plot}</h5></td>
          <td><h5>{data.Plot}</h5></td>
          <td><h5>{data.Plot}</h5></td>
        </tr>
        <tr>
          <td> <h4>Director: {data.Director}</h4> </td>
          <td>  <h4>Director: {data.Director}</h4> </td>
          <td>  <h4>Director: {data.Director}</h4> </td>
          <td>  <h4>Director: {data.Director}</h4> </td>
        </tr>

      </table>


    </div>

  );

}



export default Listings;
