import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import About from "./Pages/About";
import Bookings from "./Pages/Bookings";
import Classifications from "./Pages/Classifcations";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Lightyear from "./Pages/Lightyear";
import Listings from "./Pages/Listings";
import Location from "./Pages/Location";
import OpeningTimes from "./Pages/OpeningTimes";
import PageNotFound from "./Pages/PageNotFound";
import Places from "./Pages/Places";
import Screens from "./Pages/Screens";
import Searchbar from "./Pages/Searchbar";
import Success from "./Pages/Success";
import NewListings from "./Pages/NewListings";

import Board from "./Pages/Board";

import Carousel from "./Pages/Carousel";

function App() {
  return (
    <Router>
      <div className="Header" style={{ background: "black" }}>
        <Header />
      </div>

      <div className="b-example-divider bg-dark"></div>
      <div className="p-2 text-center" style={{ background: "black" }}>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Board" element={<Board />}></Route>
          <Route path="/Bookings" element={<Bookings />} />
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Carousel" element={<Carousel />}></Route>
          <Route path="/Classifications" element={<Classifications />}></Route>
          <Route path="/Listings" element={<Listings />}></Route>
          <Route path="/NewListings" element={<NewListings />}></Route>
          <Route path="/Location" element={<Location />}></Route>
          <Route path="/Lightyear" element={<Lightyear />}></Route>
          <Route path="/OpeningTimes" element={<OpeningTimes />}></Route>
          <Route path="/Places" element={<Places />}></Route>
          <Route path="/Screens" element={<Screens />} />
          <Route path="/Searchbar" element={<Searchbar />}></Route>
          <Route path="/Success" element={<Success />} />
        </Routes>
      </div>
      <div className="b-example-divider bg-dark"></div>

      <Footer />
    </Router>
  );
}

export default App;
