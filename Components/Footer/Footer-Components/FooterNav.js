import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <div>
      <footer>
        <div className="d-flex justify-content-center">
          <nav>
            <Link to="/">
              <button
                type="button"
                className="btn btn-outline-secondary align-items-center"
              >
                Home
              </button>
            </Link>
            <Link to="/NewListings">
              <button type="button" className="btn btn-outline-secondary">
                New Films
              </button>
            </Link>
            <Link to="/Listings">
              <button type="button" className="btn btn-outline-secondary">
                Top 10
              </button>
            </Link>
            <Link to="/Contact">
              <button type="button" className="btn btn-outline-secondary">
                Contact Us
              </button>
            </Link>

            <Link to="/About">
              <button type="button" className="btn btn-outline-secondary">
                About Us
              </button>{" "}
            </Link>
            <Link to="/Board">
              {" "}
              <button type="button" className="btn btn-outline-secondary">
                Board
              </button>{" "}
            </Link>
            <Link to="/Searchbar">
              <button type="button" className="btn btn-outline-secondary">
                Search
              </button>
            </Link>
            <Link to="/Classifications">
              <button type="button" className="btn btn-outline-secondary">
                Classifications
              </button>
            </Link>
            <Link to="/Location">
              <button type="button" className="btn btn-outline-secondary">
                Location
              </button>
            </Link>
            <Link to="/Bookings">
              <button type="button" className="btn btn-outline-secondary">
                Book NOW
              </button>
            </Link>
            <Link to="/Carousel">
              <button type="button" className="btn btn-outline-secondary">
                CAROUSEL
              </button>
            </Link>
            <Link to="/OpeningTimes">
              <button type="button" className="btn btn-outline-secondary">
                Opening Hours
              </button>
            </Link>
            <Link to="/Places">
              <button type="button" className="btn btn-outline-secondary">
                Places
              </button>
            </Link>

            <Link to="/Tickets">
              <button type="button" className="btn btn-outline-secondary">
                Tickets
              </button>
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default FooterNav;
