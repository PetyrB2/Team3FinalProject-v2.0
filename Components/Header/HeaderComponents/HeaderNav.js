import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="text-center">
      <header>
        <nav className="navbar-nav ">
          <ul className="p-2 gt-4">
            <Link to="/">
              <button type="button" className="btn btn-primary">
                Home
              </button>
            </Link>

            <Link to="/About">
              <button type="button" className="btn btn-primary">
                About
              </button>
            </Link>
            <Link to="/Searchbar">
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </Link>

            <Link to="/Listings">
              <button type="button" className="btn btn-primary">
                Film Listings
              </button>
            </Link>
            <Link to="/NewListings">
              <button type="button" className="btn btn-primary">
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
