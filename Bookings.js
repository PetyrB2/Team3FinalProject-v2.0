import React from 'react'

const Bookings = () => {
  return (
    <div>
<center><h1>Booking Form</h1></center>

<div className="row">
        <div className="col-md-6 offset-md-3 border p-4 shadow bg-light">
            <div className="col-12">
                <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">Tickets Please!</h3>
            </div>
            <form action="">
                <div className="row g-3 border p-9 shadow">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Last Name" required/>
                    </div>
                    <div className="col-md-6">
                        <input type="tel" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Enter Email" required />
                    </div>
                    <div className="col-md-6">
                        <input type="date" className="form-control" placeholder="Enter Date" required />
                    </div>
                    <div className="col-md-6">
                        <input type="time" className="form-control" placeholder="Time" required />
                    </div>
                    <div className="col-12">
                        <select className="form-select" required>
                            <option defaultValue={'1'}>Pick a Film</option>
                            <option value="1">Avengers</option>
                            <option value="2">Dr Strange</option>
                            <option value="3">Mary Poppins</option>
                            <option value="4">A Christmas Carol</option>
                            <option value="5">Count of Monte Cristo</option>
                            <option value="6">V for Vendetta</option>
                            <option value="7">Jericho</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" placeholder="Message"></textarea>
                    </div>
                    <div className="col-12 mt-5">                        
                        <button type="submit" className="btn btn-primary float-end">Go to Payment</button>
                        <button type="button" className="btn btn-outline-secondary float-end me-2">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>


  
  )
}

export default Bookings