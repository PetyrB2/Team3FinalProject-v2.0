import React from "react";

const HeaderRight = () => {
  return (
    <div className="text-center">
      <div className="lead text-white">WE</div>
      <img
        src={require("../../../assets/images/red-heart.png")}
        alt="red-heart"
        width="55%"
      />
      <div className="lead text-white">FILMS</div>
    </div>
  );
};

export default HeaderRight;
