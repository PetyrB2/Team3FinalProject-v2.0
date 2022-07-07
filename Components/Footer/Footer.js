import React from "react";
import background from "../../assets/images/metal-blue.png";
//  import '../../assets/css/footer.css';
import FooterCopyright from "./Footer-Components/FooterCopyright";

function footer() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <FooterCopyright />
    </div>
  );
}

export default footer;
