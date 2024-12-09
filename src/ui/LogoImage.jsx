import React from "react";
import "../styles/global.css";

function LogoImage({ img }) {
  return (
    <div className="logo-image-container">
      <img src={img} alt="Logo" className="img-fluid" />
    </div>
  );
}

export default LogoImage;
