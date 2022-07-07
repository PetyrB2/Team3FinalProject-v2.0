import React from "react";
import { Link } from "react-router-dom";

const Places = () => {
  return (
    <div>
      <div>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.6347856455568!2d-0.07367185582493432!3d51.508270224548816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034974e166ef%3A0xd50885920e5ef4af!2sSlug%20%26%20Lettuce%20Tower%20Bridge!5e0!3m2!1sen!2suk!4v1656942085436!5m2!1sen!2suk"
                width="400"
                height="300"
                title="Slug"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                <div className="lead fw-bold">LOGO</div>
              </h1>
              <hr />
              <div className="lead">
                <div className="lead text-uppercase ">
                  <h2>Slug & Lettuce</h2>
                </div>
                <hr />
                <div className="small text-muted mb-2">
                  <h5>1 St. Katherine's Way</h5>
                  <h5>London,</h5>
                  <h5> UK</h5>
                  <h5>E1W 1YL</h5>
                  <hr />
                  <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                    <center>
                      <img
                        src={require("../assets/images/slugandlettuce.jpg")}
                        alt="The Slug & Lettuce"
                        width="60%"
                      />
                    </center>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                    <center>
                      <a
                        href="https://www.google.com/maps/dir/3rd+Floor,+QA+Ltd.,+International+House,+Saint+Katharine's+Way,+London/Slug+%26+Lettuce+Tower+Bridge,+Saint+Katharine's+Way,+London/@51.5079882,-0.0749667,17z/data=!3m2!4b1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m14!4m13!1m5!1m1!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!2m2!1d-0.0738037!2d51.5075167!1m5!1m1!1s0x4876034974e166ef:0xd50885920e5ef4af!2m2!1d-0.0733634!2d51.5084255!3e2"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button
                          type="button"
                          className="btn btn-primary btn-lg px-4 me-md-2"
                        >
                          Get Directions
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
              </div>
            </div>
          </div>

          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.631452917399!2d-0.07409834276312138!3d51.50839251845128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603490addee27%3A0x565135c8d54f3e72!2sPing%20Pong%20St%20Katharine%20Docks!5e0!3m2!1sen!2s"
                width="400"
                height="300"
                title="Slug"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                <div className="lead fw-bold">LOGO</div>
              </h1>
              <hr />
              <div className="lead">
                <div className="lead text-uppercase ">
                  <h2>Ping Pong</h2>
                </div>
                <hr />
                <div className="small text-muted mb-2">
                  <h5>3 St. Katherine's Way</h5>
                  <h5>London,</h5>
                  <h5> UK</h5>
                  <h5>E1W 1BA</h5>
                  <hr />
                  <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                    <center>
                      <img
                        src={require("../assets/images/pingpong.jpg")}
                        width="60%"
                        alt="Ping Pong"
                      />
                    </center>
                  </div>

                  <hr />
                  <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                    <center>
                      <a
                        href="https://www.google.com/maps/dir/3rd+Floor,+QA+Ltd.,+International+House,+Saint+Katharine's+Way,+London/Ping+Pong+St+Katharine+Docks,+3+St+Katharine's+Way,+London+E1W+1BA/@51.5078686,-0.0733945,17.75z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m14!4m13!1m5!1m1!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!2m2!1d-0.0738037!2d51.5075167!1m5!1m1!1s0x487603490addee27:0x565135c8d54f3e72!2m2!1d-0.073004!2d51.5083892!3e2"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button
                          type="button"
                          className="btn btn-primary btn-lg px-4 me-md-2"
                        >
                          Get Directions
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
