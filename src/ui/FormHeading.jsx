import Logo from "./Logo";
import LogoImage from "./LogoImage";
import "../styles/formHeading.css";
import { Link } from "react-router-dom";

function FormHeading({ para, link, heading, to }) {
  return (
    <div className="form-heading text-center">
      <LogoImage img="/ALOHA BIDS FINAL-01 1.png" />
      <Logo logo={heading} />

      <div className="form-subtext">
        {para}
        <Link to={to} className="form-link">
          {link}
        </Link>
      </div>
    </div>
  );
}

export default FormHeading;
