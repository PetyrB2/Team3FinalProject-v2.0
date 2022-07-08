import React from "react";
import HeaderNav from "./HeaderComponents/HeaderNav";
import HeaderRight from "./HeaderComponents/HeaderRight";
import Logo from "./HeaderComponents/Logo";

// Main Header for importing Top of Page Components

const Header = () => {
  return (
    <div className="row">
      <div className="col-2">
        <Logo />
      </div>
      <div className="col-8">
        <HeaderNav />
      </div>
      <div className="col-2">
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
