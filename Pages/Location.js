import React from "react";

const Location = () => {
  return (
    <div>
      <div>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3104599630633!2d-0.0759923850556685!3d51.50752001851664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603544462f21d%3A0x60c3dd1ddc3bc0b7!2sQA%20Ltd.!5e0!3m2!1sen!2suk!4v1656776639418!5m2!1sen!2suk"
                title="gmap"
                width="600"
                height="450"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-lg-6">
              <div className="lead fw-bold">
                <img
                  src={require("../assets/images/QALogo-No_bg.png")}
                  alt="QALogo"
                />
              </div>

              <hr />
              <div className="small text-white mb-2">
                <h5> International House</h5>
                <h5>1 St. Katherine's Way</h5>
                <h5>London,</h5>
                <h5> UK</h5>
                <h5>E1W 1UN</h5>
                <hr />
                <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                  <center>
                    <a
                      href="https://www.google.com/maps/dir//3rd+Floor,+QA+Ltd.,+International+House,+1+St+Katharine's+Way,+London+E1W+1UN/@51.507023,-0.0754622,16.75z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m9!4m8!1m0!1m5!1m1!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!2m2!1d-0.0738037!2d51.5075167!3e3"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-primary btn-lg px-4 me-md-2 gt-2"
                      >
                        Get Directions
                      </button>
                    </a>
                  </center>
                </div>
              </div>
              {/* </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
