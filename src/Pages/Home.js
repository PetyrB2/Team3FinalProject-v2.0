import React from "react";
import { Link } from "react-router-dom";
import deluxe from "./../assets/images/deluxe.png";
import NewListings from "./NewListings";

const Home = () => {
  return (
    <div
      className="text-center text-white"
      style={{
        backgroundImage: `url(${deluxe})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Welcome to QA CINEMAS !</h1>
      <hr />
      <NewListings />
      <hr />
      <Link to="/Bookings">
        <img
          src={require("../assets/images/book-now-removebg.png")}
          alt="booknow"
          width="20%"
        />
      </Link>

      <h2>Family & Members Deals (coming soon)</h2>
    </div>
  );
};

export default Home;
