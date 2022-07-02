import React from 'react';


const Location = () => {
  return (
    <div>

      <div className="b-example-divider bg-dark"></div>

      <div className="bg-dark text-secondary px-4 py-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg text-center">
        <div className="col-lg-7 d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
            <div id="logo">
            <h1 className="display-4 fw-bold lh-1">LOGO</h1>
            </div>
            </div>
          
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 border shadow mb-4">
            <h1 className="display-4 fw-bold lh-1">QA Cinema</h1>
            <p className="lead fw-bold" > International House</p>
            <p className="lead"> 1 St. Katherine's Way</p>
            <p className="lead"> London</p>
            <p className="lead"> UK</p>
            <p className="lead"> E1W 1UN</p>
            <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <center>
                <a href="https://www.google.com/maps/dir//3rd+Floor,+QA+Ltd.,+International+House,+1+St+Katharine's+Way,+London+E1W+1UN/@51.507023,-0.0754622,16.75z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m9!4m8!1m0!1m5!1m1!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!2m2!1d-0.0738037!2d51.5075167!3e3" target="_blank"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Get Directions</button></a>
                <a href="/"><button type="button" className="btn btn-info btn-lg px-4 me-md-2">Homepage</button></a>
              </center>
            </div>

          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <div className="col-lg-7 d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3104599630633!2d-0.0759923850556685!3d51.50752001851664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603544462f21d%3A0x60c3dd1ddc3bc0b7!2sQA%20Ltd.!5e0!3m2!1sen!2suk!4v1656776639418!5m2!1sen!2suk" width="600" height="450" loading='lazy' referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            </div>
    

          </div>
        </div>

      </div>
      <div className="b-example-divider bg-dark "></div>


    </div>
  )
}

export default Location;