import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Bookings() {
  let [cartCount, setCartCount] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([]);
  // Upper Payment Part
  const [firstNameState, setFirstName] = useState("");
  const [lastNameState, setLastName] = useState("");
  const [emailState, setEmail] = useState("");
  const [phoneNumberState, setPhoneNumber] = useState("");
  const [dateState, setDate] = useState("");
  const [timeState, setTime] = useState("");
  const [filmState, setFilm] = useState("");
  const [messageState, setMessage] = useState("");
  // Lower Payment Part
  const [child, setChild] = useState({ id: 1, quantity: 1 });
  const [adult, setAdult] = useState({ id: 2, quantity: 1 });
  const [concession, setConcession] = useState({ id: 3, quantity: 1 });
  const [childDeluxe, setChildDeluxe] = useState({ id: 4, quantity: 1 });
  const [adultDeluxe, setAdultDeluxe] = useState({ id: 5, quantity: 1 });
  const [concessionDeluxe, setConcessionDeluxe] = useState({
    id: 6,
    quantity: 1,
  });

  const [total, setTotal] = useState(0.0);

  const childPrice = 5;
  const adultPrice = 10;
  const concessionPrice = 7;
  const childDeluxePrice = 10;
  const adultDeluxePrice = 15;
  const concessionDeluxePrice = 12;

  const addItem = (ticketType, setTicketType, price) => {
    if (
      //if in the cart
      shoppingCart.some((shoppingCart) => shoppingCart.id === ticketType.id)
    ) {
      const objIndex = shoppingCart.findIndex(
        (obj) => obj.id === ticketType.id
      );
      shoppingCart[objIndex].quantity = shoppingCart[objIndex].quantity + 1;
      setTicketType((ticketType) => ({
        ...ticketType,
        quantity: ticketType.quantity + 1,
      }));
      console.log("in cart:" + JSON.stringify(ticketType));
    } else {
      setTicketType((ticketType) => ({
        ...ticketType,
        quantity: ticketType.quantity + 1,
      }));
      setShoppingCart(shoppingCart.concat(ticketType));
      console.log("added to cart:" + JSON.stringify(ticketType));
    }
    setCartCount(cartCount + 1);
    setTotal(total + price);
  };

  const takeItem = (ticketType, setTicketType, price) => {
    if (
      //if in the cart
      shoppingCart.some((shoppingCart) => shoppingCart.id === ticketType.id)
    ) {
      const objIndex = shoppingCart.findIndex(
        (obj) => obj.id === ticketType.id
      );
      if (ticketType.quantity > 1) {
        shoppingCart[objIndex].quantity = shoppingCart[objIndex].quantity - 1;
        setTicketType((ticketType) => ({
          ...ticketType,
          quantity: ticketType.quantity - 1,
        }));
        setCartCount(cartCount - 1);
        setTotal(total - price);
      }
      console.log("1 taken from cart:" + JSON.stringify(ticketType));
    } else {
    }
    console.log(shoppingCart);
  };

  const removeItem = (ticketType, setTicketType, price) => {
    if (
      //if in the cart
      shoppingCart.some((shoppingCart) => shoppingCart.id === ticketType.id)
    ) {
      const objIndex = shoppingCart.findIndex(
        (obj) => obj.id === ticketType.id
      );
      shoppingCart.splice(objIndex, 1);
      console.log("removed from cart:" + JSON.stringify(ticketType));

      setCartCount(cartCount - ticketType.quantity + 1);
      setTotal(total - price * (ticketType.quantity - 1));

      setTicketType((ticketType) => ({
        ...ticketType,
        quantity: 1,
      }));
    } else {
    }
  };

  // SAVE CUSTOMER BIT
  const saveCustomer = () => {
    axios.post("http://localhost:3001/saveCustomer/create", {
      firstName: firstNameState,
      lastName: lastNameState,
      phoneNumber: phoneNumberState,
      email: emailState,
      date: dateState,
      time: timeState,
      film: filmState,
      message: messageState,
      cart: shoppingCart,
    });
  };

  const addChildTicket = () => {
    addItem(child, setChild, childPrice);
  };
  const takeChildTicket = () => {
    takeItem(child, setChild, childPrice);
  };
  const removeChildTicket = () => {
    removeItem(child, setChild, childPrice);
  };

  const addAdultTicket = () => {
    addItem(adult, setAdult, adultPrice);
  };
  const takeAdultTicket = () => {
    takeItem(adult, setAdult, adultPrice);
  };
  const removeAdultTicket = () => {
    removeItem(adult, setAdult, adultPrice);
  };

  const addConcessionTicket = () => {
    addItem(concession, setConcession, concessionPrice);
  };
  const takeConcessionTicket = () => {
    takeItem(concession, setConcession, concessionPrice);
  };
  const removeConcessionTicket = () => {
    removeItem(concession, setConcession, concessionPrice);
  };

  //Deluxe tickets
  const addChildDeluxeTicket = () => {
    addItem(childDeluxe, setChildDeluxe, childDeluxePrice);
  };
  const takeChildDeluxeTicket = () => {
    takeItem(childDeluxe, setChildDeluxe, childDeluxePrice);
  };
  const removeChildDeluxeTicket = () => {
    removeItem(childDeluxe, setChildDeluxe, childDeluxePrice);
  };

  const addAdultDeluxeTicket = () => {
    addItem(adultDeluxe, setAdultDeluxe, adultDeluxePrice);
  };
  const takeAdultDeluxeTicket = () => {
    takeItem(adultDeluxe, setAdultDeluxe, adultDeluxePrice);
  };
  const removeAdultDeluxeTicket = () => {
    removeItem(adultDeluxe, setAdultDeluxe, adultDeluxePrice);
  };

  const addConcessionDeluxeTicket = () => {
    addItem(concessionDeluxe, setConcessionDeluxe, concessionDeluxePrice);
  };
  const takeConcessionDeluxeTicket = () => {
    takeItem(concessionDeluxe, setConcessionDeluxe, concessionDeluxePrice);
  };
  const removeConcessionDeluxeTicket = () => {
    removeItem(concessionDeluxe, setConcessionDeluxe, concessionDeluxePrice);
  };

  const checkout = () => {
    fetch("http://localhost:3001/checkout/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: shoppingCart,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  const badgers = () => {
    saveCustomer();
    checkout();
  };

  return (
    <div className="container text white">
      <div className="lead text-center text white">Booking Form</div>

      <div className="row">
        <div className="col-md-6 offset-md-3 border p-4 shadow bg-light">
          <div className="col-12">
            <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">
              Tickets Please!
            </h3>
          </div>

          <div className="row g-3 border p-9 shadow">
            <div className="col-md-6">
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className="form-control"
                placeholder="Enter Date"
                required
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                value={timeState}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option defaultValue={"Time Not Selected"}> Pick a Time</option>
                <option value="10:00">10:00</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
                <option value="16:00">16:00</option>
                <option value="18:00">18:00</option>
                <option value="20:00">20:00</option>
                <option value="22:00">22:00</option>
                <option value="00:00">00:00 Sat. Only</option>
              </select>
            </div>

            {/* FILMS WE ARE SHOWING */}

            <div className="col-12">
              <select
                className="form-select"
                value={filmState}
                onChange={(e) => setFilm(e.target.value)}
                required
              >
                <option defaultValue={"Film Not Slected"}>Pick a Film</option>
                <option value="Avengers">Avengers</option>
                <option value="Dr Strange">Dr Strange</option>
                <option value="Mary Poppins">Mary Poppins</option>
                <option value="A Christmas Carol">A Christmas Carol</option>
                <option value="Count of Monte Cristo">
                  Count of Monte Cristo
                </option>
                <option value="V for Vendetta">V for Vendetta</option>
                <option value="Jericho">Jericho</option>
              </select>
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
              ></textarea>
            </div>
            <hr />

            {/* BUY TICKETS & INPUT PAYMENT BIT NEXT */}

            <div className="container bg-dark text-white">
              <table className="table table-sm auto-fit text-white">
                <thead>
                  <tr>
                    <th scope="col">Ticket Type</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-info">
                    <th scope="row justify-content-left">Child</th>
                    <td>£ {childPrice}.00</td>
                    <td>
                      <button id="minus" onClick={(e) => takeChildTicket(e)}>
                        {" "}
                        -{" "}
                      </button>{" "}
                      {child.quantity - 1}{" "}
                      <button id="add" onClick={(e) => addChildTicket(e)}>
                        {" "}
                        +{" "}
                      </button>{" "}
                      <button id="remove" onClick={(e) => removeChildTicket(e)}>
                        {" "}
                        Remove{" "}
                      </button>{" "}
                    </td>
                  </tr>

                  <tr className="table-primary">
                    <th scope="row">Adult</th>
                    <td>£{adultPrice}.00</td>
                    <td>
                      <button id="minus" onClick={(e) => takeAdultTicket(e)}>
                        {" "}
                        -{" "}
                      </button>{" "}
                      {adult.quantity - 1}{" "}
                      <button id="add" onClick={(e) => addAdultTicket(e)}>
                        {" "}
                        +{" "}
                      </button>{" "}
                      <button id="remove" onClick={(e) => removeAdultTicket(e)}>
                        {" "}
                        Remove
                      </button>
                    </td>
                  </tr>

                  <tr className="table-secondary">
                    <th scope="row">Concession</th>
                    <td>£{concessionPrice}.00</td>
                    <td>
                      <button
                        id="minus"
                        onClick={(e) => takeConcessionTicket(e)}
                      >
                        {" "}
                        -{" "}
                      </button>{" "}
                      {concession.quantity - 1}{" "}
                      <button id="add" onClick={(e) => addConcessionTicket(e)}>
                        {" "}
                        +{" "}
                      </button>{" "}
                      <button
                        id="remove"
                        onClick={(e) => removeConcessionTicket(e)}
                      >
                        {" "}
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr className="table-success">
                    <th scope="row">Child Deluxe</th>
                    <td>£{childDeluxePrice}.00</td>
                    <td>
                      <button
                        id="minus"
                        onClick={(e) => takeChildDeluxeTicket(e)}
                      >
                        {" "}
                        -{" "}
                      </button>{" "}
                      {childDeluxe.quantity - 1}{" "}
                      <button id="add" onClick={(e) => addChildDeluxeTicket(e)}>
                        {" "}
                        +{" "}
                      </button>{" "}
                      <button
                        id="remove"
                        onClick={(e) => removeChildDeluxeTicket(e)}
                      >
                        {" "}
                        Remove{" "}
                      </button>
                    </td>
                  </tr>
                  <tr className="table-danger">
                    <th scope="row">Adult Deluxe</th>
                    <td>£{adultDeluxePrice}.00</td>
                    <td>
                      <button
                        id="minus"
                        onClick={(e) => takeAdultDeluxeTicket(e)}
                      >
                        {" "}
                        -{" "}
                      </button>{" "}
                      {adultDeluxe.quantity - 1}{" "}
                      <button id="add" onClick={(e) => addAdultDeluxeTicket(e)}>
                        {" "}
                        +{" "}
                      </button>{" "}
                      <button
                        id="remove"
                        onClick={(e) => removeAdultDeluxeTicket(e)}
                      >
                        {" "}
                        Remove{" "}
                      </button>
                    </td>
                  </tr>
                  <tr className="table-warning">
                    <th scope="row">Concession Deluxe</th>
                    <td>£{concessionDeluxePrice}.00</td>
                    <td>
                      <button
                        id="minus"
                        onClick={(e) => takeConcessionDeluxeTicket(e)}
                      >
                        {" "}
                        -{" "}
                      </button>{" "}
                      {concessionDeluxe.quantity - 1}{" "}
                      <button
                        id="add"
                        onClick={(e) => addConcessionDeluxeTicket(e)}
                      >
                        {" "}
                        +{" "}
                      </button>{" "}
                      <button
                        id="remove"
                        onClick={(e) => removeConcessionDeluxeTicket(e)}
                      >
                        {" "}
                        Remove{" "}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr />

            {/* CART STARTS */}

            <div className="col-12 mt-5 justify-content-right">
              <p>Cart: {cartCount} items</p>
              <p>
                <strong>Total cost: £{total} </strong>
              </p>
              {/* Button Zone */}
              <button
                id="checkout"
                onClick={(e) => badgers(e)}
                type="submit"
                className="btn btn-primary float-end"
              >
                Go to Payment
              </button>

              <Link to="/Listings">
                <button
                  type="button"
                  className="btn btn-outline-secondary float-end me-2"
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
