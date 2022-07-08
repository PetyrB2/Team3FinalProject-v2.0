import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Header/HeaderComponents/Logo";
import background from "../../../assets/images/wavey-blue.png";

const footerCopyright = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      {/* SOCIAL MEDIA SECTION BEGINS */}
      <section
        className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* LEFT  */}
        <div className="me-5 d-none d-sm-block text-white text-center">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* Facebook */}
          <a
            className="btn btn-primary"
            style={{ background: "blue" }}
            href="https://www.facebook.com"
            role="button"
          >
            <i className="fab fa-facebook-f">Facebook</i>
          </a>
          <a
            className="btn btn-primary"
            style={{ background: "blue" }}
            href="https://www.facebook.com"
            role="button"
          >
            Twitter
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-primary"
            style={{ background: "blue" }}
            href="https://www.facebook.com"
            role="button"
          >
            Google
            <i className="fab fa-google"></i>
          </a>
          <a
            className="btn btn-primary"
            style={{ background: "blue" }}
            href="https://www.facebook.com"
            role="button"
          >
            Instagram
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-primary"
            style={{ background: "blue" }}
            href="https://www.facebook.com"
            role="button"
          >
            LinkedIn
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="btn btn-primary"
            style={{ background: "blue" }}
            href="https://www.facebook.com"
            role="button"
          >
            Github
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION  ENDS */}

      {/* LINKS */}

      <div className="container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div className="row mt-3">
          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
            {/* CONTENT HERE  */}

            <div className="text-uppercase fw-bold mb-4">
              <h6 className="fas fa-gem me-3 text-white">QA CINEMAS</h6>
            </div>
            <div className="d-flex justify-content-center text-white">
              <div>
                <p />
                <i className="fas fa-home me-3"> 1 St Katherine's way,</i>
                <p />
                <i className="fas fa-home me-3">London</i>
                <p />
                <i className="fas fa-home me-3">E1W 1UN</i>
                <p />
                <i className="fas fa-home me-3">UK</i>
                <p />

                <img
                  src={require("../../../assets/images/QALogo-No_bg.png")}
                  alt="logo"
                  height="50%"
                  width="50%"
                />
              </div>
            </div>
          </div>

          {/* Grid Column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4 text-white">
              Our Films
            </h6>
            <p>
              <Link to="/Home">QA Cinemas</Link>
            </p>
            <p>
              <Link to="/Bookings">Book NOW!</Link>
            </p>
            <p>
              <Link to="/Searchbar">Search...</Link>
            </p>
            <p>
              <Link to="/NewListings">New Films</Link>
            </p>
            <p>
              <Link to="/Listings">Film Listings</Link>
            </p>
            <p>
              <Link to="/Screens">Our Screens</Link>
            </p>
          </div>

          {/* Grid Column */}

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4 text-white">
              Useful links
            </h6>
            <p>
              <Link to="/Board">Board</Link>
            </p>

            <p>
              <Link to="/OpeningTimes">Opening Hours</Link>
            </p>
            <p>
              <Link to="/Places">Places To Eat</Link>
            </p>
            <p>
              <Link to="/Location">Location</Link>
            </p>

            <p>
              <Link to="/Classifications">Classifications</Link>
            </p>
          </div>
          <div className=" text-white col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <Link to="/Contact">Contact Us</Link>
            </p>
            <p>
              <Link to="/About">About Us</Link>
            </p>
            <p className="Mdnight text-white">
              <Link to="/Listings2">Midnight Listings (18)</Link>
            </p>

            <div>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@qa-cinemas.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 80
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Test colors on this div */}
      <div className="text-center text-white p-4" background-color="red">
        © 2022 Copyright:{" "}
        <a className="text-reset fw-bold" href="https://github/dundasboots/">
          QA Cinemas Ltd
        </a>
      </div>
    </footer>
  );
};

export default footerCopyright;
