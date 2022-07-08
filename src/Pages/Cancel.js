import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="container text-white text-center bg-dark">
      <h1>Sorry. Something went wrong.</h1>
      <p>
        <h1>
          Please
          <Link to="/Booking">Click here to try again</Link>
        </h1>
      </p>
    </div>
  );
};

export default Cancel;
