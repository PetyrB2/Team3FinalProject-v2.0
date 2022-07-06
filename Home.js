import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center text-white">
      <h1>Welcome to QA CINEMAS !</h1>

      <h3>
        <Link to="/Bookings">Buy YOUR tickets NOW !</Link>
      </h3>

      <h2>
        <Link to="/NewListings">Latest Movies(image)</Link>
      </h2>

      <h2>
        <Link to="/Screens">Our New Deluxe Screen!(image)</Link>
      </h2>
      <img
        src={require("../assets/images/deluxe.png")}
        alt="seats"
        width="40%"
      />

      <h2>Family & Members Deals (coming soon)</h2>
    </div>
  );
};

export default Home;
