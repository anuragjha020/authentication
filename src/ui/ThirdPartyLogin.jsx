import React from "react";
import "../styles/thirdPartyLogin.css";

function ThirdPartyLogin() {
  return (
    <div className="third-party-container">
      <button
        className="third-party-button"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <img src="/google-icon.png" alt="google icon" />
      </button>
      <button
        className="third-party-button"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <img src="/facebook-icon.png" alt="facebook icon" />
      </button>
    </div>
  );
}

export default ThirdPartyLogin;
