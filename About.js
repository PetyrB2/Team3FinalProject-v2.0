import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="row">
      <p id="Listings" />
      {/* Ladislav */}
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25">
        <h2>ladislav</h2>
        <h5>Responsibilty: FrontEnd, Risk Analysis, Documentation</h5>

        <h6>Write here...</h6>
        <Link to="/Bookings">
          <button className="btn btn-outline-secondary">Donate Here</button>
        </Link>
        <div className="card-text">card text</div>

        <h6>
          Skills: Javascript, Java, Node.js, React.js, HTML, CSSCyber Security,
          Multi-Lingual{" "}
        </h6>

        <h4>Something2: </h4>
        <Link to="/Bookings">
          <button className="btn btn-outline-secondary">another link</button>
        </Link>
      </div>

      {/* Peter */}
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25 card-title">
        <h2>Peter Broadbent</h2>

        <h5>Responsibilty: FrontEnd</h5>
        <h5>Software Specialist</h5>

        <Link to="/Bookings">
          <button className="btn btn-outline-secondary">Pic of Me</button>
        </Link>
        <h6>A background in IT. Love technology. Live to eat code.</h6>
        <h6>
          Skills: Javascript, Java, HTML, CSS, Node.js, React.js, IT background,
          Multi-Lingual{" "}
        </h6>
        <h4>Responsibilty: Front-End </h4>
        <Link to="/Bookings">
          <button className="btn btn-outline-secondary">Button</button>
        </Link>
      </div>

      {/* Saad */}
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25">
        <h2>Saad Ahmed </h2>
        <h5>Released: releasaes</h5>

        <Link to="/Bookings">
          <button className="btn btn-outline-secondary">IMAGE</button>
        </Link>
        <h6>genre</h6>

        <h6>
          Skills: Javascript, Java, HTML, CSS, Node.js, React.js, IT background,
          Multi-Lingual{" "}
        </h6>

        <h4>Director: His Mum</h4>
        <Link to="/Bookings">
          <button className="btn btn-outline-secondary">Button</button>
        </Link>
      </div>

      {/* Jordan */}
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-25">
        <h2>Jordan</h2>
        <h5>Released: Jun Lee</h5>

        <Link to="/Bookings">
          <button className="btn btn-outline-secondary">
            Image here maybe
          </button>
        </Link>
        <h6>Genre</h6>

        <h6>plot</h6>
        <h6>
          Skills: Javascript, Java, HTML, CSS, Node.js, React.js, IT background,
          Multi-Lingual{" "}
        </h6>
        <h4>Director: asdasdasdasd</h4>
        <Link to="/Bookings">
          <button className="btn btn-outline-secondary">Button</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
