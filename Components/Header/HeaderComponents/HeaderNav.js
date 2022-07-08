import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="text-center">
      <header>
        <nav className="navbar-nav ">
          <ul className="p-2 gt-4">
            <Link to="/">
              <button type="button" className="btn btn-primary btn-lg rounded-pill shadow border">
                Home
              </button>
            </Link>

            <Link to="/About">
              <button type="button" className="btn btn-primary btn-lg rounded-pill shadow border">
                About
              </button>
            </Link>
            <Link to="/Searchbar">
              <button type="button" className="btn btn-primary btn-lg rounded-pill shadow border">
                Search
              </button>
            </Link>

            <Link to="/Listings">
              <button type="button" className="btn btn-primary btn-lg rounded-pill shadow border">
                Film Listings
              </button>
            </Link>
            <Link to="/NewListings">
              <button type="button" className="btn btn-primary btn-lg rounded-pill shadow border">
                New Films
              </button>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderNav;
