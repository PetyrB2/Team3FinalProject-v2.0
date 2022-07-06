import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <center>
        <h1>404 Error</h1>
      </center>
      <center>
        <img src={require("../assets/images/404.gif")} alt="404-cat" />
      </center>
      <center>
        <h1>Page Not Found</h1>
      </center>
      <center> nginx/1.23.0</center>
    </div>
  );
};

export default PageNotFound;
