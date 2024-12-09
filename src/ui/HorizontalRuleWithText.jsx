import React from "react";
import "../styles/global.css";

function HorizontalRuleWithText({ text }) {
  return (
    <div className="horizontal-rule-container">
      <hr className="horizontal-rule-line" />
      <span className="horizontal-rule-text">{text}</span>
      <hr className="horizontal-rule-line" />
    </div>
  );
}

export default HorizontalRuleWithText;
