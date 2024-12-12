import React from "react";
import "../styles/global.css";

function LogoImage({ img, onClick }) {
  return (
    <div className="logo-image-container" onClick={onClick}>
      <img src={img} alt="Logo" className="img-fluid" />
    </div>
  );
}

export default LogoImage;
