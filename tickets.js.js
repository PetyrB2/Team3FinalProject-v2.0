import "./App.css";
import { useState, useEffect } from "react";
function App() {
  let [cartCount, setCartCount] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([]);

  const [child, setChild] = useState({ id: 1, quantity: 1 });
  const [adult, setAdult] = useState({ id: 2, quantity: 1 });
  const [concession, setConcession] = useState({ id: 3, quantity: 1 });
  const [childDeluxe, setChildDeluxe] = useState({ id: 4, quantity: 1 });
  const [adultDeluxe, setAdultDeluxe] = useState({ id: 5, quantity: 1 });
  const [concessionDeluxe, setConcessionDeluxe] = useState({
    id: 6,
    quantity: 1,
  });

  const addItem = (ticketType, setTicketType) => {
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
  };

  const takeItem = (ticketType, setTicketType) => {
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
      }
      console.log("1 taken from cart:" + JSON.stringify(ticketType));
    } else {
    }
    console.log(shoppingCart);
  };

  const removeItem = (ticketType, setTicketType) => {
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

      setTicketType((ticketType) => ({
        ...ticketType,
        quantity: 1,
      }));
    } else {
    }
  };

  const addChildTicket = () => {
    addItem(child, setChild);
  };
  const takeChildTicket = () => {
    takeItem(child, setChild);
  };
  const removeChildTicket = () => {
    removeItem(child, setChild);
  };

  const addAdultTicket = () => {
    addItem(adult, setAdult);
  };
  const takeAdultTicket = () => {
    takeItem(adult, setAdult);
  };
  const removeAdultTicket = () => {
    removeItem(adult, setAdult);
  };

  const addConcessionTicket = () => {
    addItem(concession, setConcession);
  };
  const takeConcessionTicket = () => {
    takeItem(concession, setConcession);
  };
  const removeConcessionTicket = () => {
    removeItem(concession, setConcession);
  };

  //Deluxe tickets
  const addChildDeluxeTicket = () => {
    addItem(childDeluxe, setChildDeluxe);
  };
  const takeChildDeluxeTicket = () => {
    takeItem(childDeluxe, setChildDeluxe);
  };
  const removeChildDeluxeTicket = () => {
    removeItem(childDeluxe, setChildDeluxe);
  };

  const addAdultDeluxeTicket = () => {
    addItem(adultDeluxe, setAdultDeluxe);
  };
  const takeAdultDeluxeTicket = () => {
    takeItem(adultDeluxe, setAdultDeluxe);
  };
  const removeAdultDeluxeTicket = () => {
    removeItem(adultDeluxe, setAdultDeluxe);
  };

  const addConcessionDeluxeTicket = () => {
    addItem(concessionDeluxe, setConcessionDeluxe);
  };
  const takeConcessionDeluxeTicket = () => {
    takeItem(concessionDeluxe, setConcessionDeluxe);
  };
  const removeConcessionDeluxeTicket = () => {
    removeItem(concessionDeluxe, setConcessionDeluxe);
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

  return (
    <div className="App">
      <div>
        Child Ticket
        <button id="minus" onClick={(e) => takeChildTicket(e)}>
          -
        </button>
        {child.quantity - 1}
        <button id="add" onClick={(e) => addChildTicket(e)}>
          +
        </button>
        <button id="remove" onClick={(e) => removeChildTicket(e)}>
          remove
        </button>
      </div>
      <div>
        Adult Ticket
        <button id="minus" onClick={(e) => takeAdultTicket(e)}>
          -
        </button>
        {adult.quantity - 1}
        <button id="add" onClick={(e) => addAdultTicket(e)}>
          +
        </button>
        <button id="remove" onClick={(e) => removeAdultTicket(e)}>
          remove
        </button>
      </div>
      <div>
        Concession Ticket
        <button id="minus" onClick={(e) => takeConcessionTicket(e)}>
          -
        </button>
        {concession.quantity - 1}
        <button id="add" onClick={(e) => addConcessionTicket(e)}>
          +
        </button>
        <button id="remove" onClick={(e) => removeConcessionTicket(e)}>
          remove
        </button>
      </div>

      <div>
        Child Ticket Deluxe
        <button id="minus" onClick={(e) => takeChildDeluxeTicket(e)}>
          -
        </button>
        {childDeluxe.quantity - 1}
        <button id="add" onClick={(e) => addChildDeluxeTicket(e)}>
          +
        </button>
        <button id="remove" onClick={(e) => removeChildDeluxeTicket(e)}>
          remove
        </button>
      </div>
      <div>
        Adult Deluxe Ticket
        <button id="minus" onClick={(e) => takeAdultDeluxeTicket(e)}>
          -
        </button>
        {adultDeluxe.quantity - 1}
        <button id="add" onClick={(e) => addAdultDeluxeTicket(e)}>
          +
        </button>
        <button id="remove" onClick={(e) => removeAdultDeluxeTicket(e)}>
          remove
        </button>
      </div>
      <div>
        Concession Deluxe Ticket
        <button id="minus" onClick={(e) => takeConcessionDeluxeTicket(e)}>
          -
        </button>
        {concessionDeluxe.quantity - 1}
        <button id="add" onClick={(e) => addConcessionDeluxeTicket(e)}>
          +
        </button>
        <button id="remove" onClick={(e) => removeConcessionDeluxeTicket(e)}>
          remove
        </button>
      </div>

      <p>Cart: {cartCount}</p>
      <button id="checkout" onClick={(e) => checkout(e)}>
        checkout
      </button>
    </div>
  );
}

export default App;
