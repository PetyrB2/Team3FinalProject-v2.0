import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Header/HeaderComponents/Logo";

const Screens = () => {
  return (
    <div>
      <div>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center text-white g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={require("../assets/images/seating.png")}
                alt="seating"
                width="100%"
              />
            </div>

            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                <div className="lead fw-bold">
                  <Logo />
                </div>
              </h1>
              <hr />
              <p className="lead">
                <div className="lead ">
                  <h2>Screen One</h2>
                </div>
                <hr />
                <div className="small mb-2 text-white">
                  <h5>Our First and Original Screen</h5>
                  <h5>Comfortable</h5>
                  <h5>Affordable</h5>
                  <h5>Fun</h5>
                  <hr />

                  <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                    <center>
                      <img
                        src={require("../assets/images/auditorium.jpg")}
                        alt="VIP-seats"
                        width="60%"
                      />
                    </center>
                  </div>
                  <hr />
                  <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                    <center>
                      <a href="/awibble" rel="noreferrer" target="_blank">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg px-4 me-md-2"
                        >
                          Snacks & Drinks
                        </button>
                      </a>
                      <Link to="/">
                        <button
                          type="button"
                          className="btn btn-info btn-lg px-4 me-md-2"
                        >
                          Homepage
                        </button>
                      </Link>
                    </center>
                  </div>
                </div>
              </p>
            </div>
          </div>

          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={require("../assets/images/vipseat.png")}
                alt="auditorium"
                width="80%"
              />
            </div>

            <div className="col-lg-6">
              <div className="lead fw-bold">
                <center>
                  <img
                    src={require("../assets/images/QALogo-No_bg.png")}
                    alt="VIP-seats"
                    width="60%"
                  />
                </center>
              </div>

              <hr />

              <p className="lead">
                <div className="lead text-white">
                  <h2>Deluxe Screen</h2>
                </div>
                <hr />
                <div className="small text-white mb-2">
                  <h5>Luxury away from Home</h5>
                  <h5>Deluxe Screen,</h5>
                  <h5>Luxuriuous</h5>
                  <h5>Pick your seat</h5>
                  <hr />
                  <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                    <center>
                      <img
                        src={require("../assets/images/deluxe.png")}
                        alt="seats"
                        width="80%"
                      />
                    </center>
                  </div>

                  <hr />
                  <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                    <center>
                      <a href="/Meow" rel="noreferrer" target="_blank">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg px-4 me-md-2"
                        >
                          Snacks & Drinks
                        </button>
                      </a>
                      <Link to="/">
                        <button
                          type="button"
                          className="btn btn-info btn-lg px-4 me-md-2"
                        >
                          Homepage
                        </button>
                      </Link>
                    </center>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screens;
