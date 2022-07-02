import React from 'react';
import '../assets/css/bootstrap.min.css';


const Contact = () => {
  return (
    <div>
      <br></br>
   

<p id="Contact"></p>
  <div className="container col-xl-10 col-xxl-8 px-4 py-5 border rounded-3 bg-dark">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3 text-light">Contact Us Today!</h1>
        <hr className="my-4" />
          <p className="col-lg-10 fs-4 text-info bg-dark">At QA Cinema we are here to help you get the best out of your movie experience.</p>
          <hr className="my-4" />
  
        <p className="col-lg-10 fs-8 text-success">From Popcorn at the Lobby to comfy plush seats in our Deluxe Screening areas.</p>
        <p className="col-lg-10 fs-8 text-success">We are here to make your night memorable. For all your needs please feel free to contact us using our form.</p>
        <hr className="my-4" />
        <a href="#Top"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Buy Tickets</button></a>
        <a href="/Bookings"><button type="button" className="btn btn-info btn-lg px-4 me-md-2">More Tickets</button></a>
        <a href="#Top"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Map</button></a>
      </div>
      

      <div className="col-md-10 mx-auto col-lg-5">
       
       
        <form className="p-4 p-md-5 border rounded-3 bg-light row g-3" 
              action="https://formspree.io/f/mvoljpad"
              method="POST">

          <div className="form-floating mb-3">
            <h4>Email Address</h4>
          <label className="form-label" id="emailAddress" type="email" name="email"></label>
        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" required />
          </div>
          <div className="form-floating mb-3">
          <h4>Message</h4>
          <label className="form-label" id="message"></label>
           <textarea className="form-control" id="message" rows="5" type="text" name="message" placeholder="Enter a message here" required></textarea>
        <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
          </div>
  
          <div className="col-md-12"></div>
          <button type="submit" className="btn btn-primary" >Send your Message</button>


            <hr className="my-4" />
          <small className="text-muted">By clicking Send you agree to the terms of use.</small>
        </form>
        </div>
        </div>
    </div>
  

{/* The BS */}
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>



    </div>
  )
}

export default Contact