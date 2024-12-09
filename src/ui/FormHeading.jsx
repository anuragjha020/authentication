import { useRoute } from "../context/RouteContext";
import Logo from "./Logo";
import LogoImage from "./LogoImage";
import "../styles/formHeading.css";

function FormHeading({ para, link, heading, to }) {
  const { navigate } = useRoute();
  return (
    <div className="form-heading text-center">
      <LogoImage img="/ALOHA BIDS FINAL-01 1.png" />
      <Logo logo={heading} />

      <div className="form-subtext">
        {para}{" "}
        <a
          href="#"
          className="form-link"
          onClick={(e) => {
            e.preventDefault();
            navigate(to);
          }}
        >
          {link}
        </a>
      </div>
    </div>
  );
}

export default FormHeading;
