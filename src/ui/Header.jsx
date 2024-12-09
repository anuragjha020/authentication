import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import LogoImage from "./LogoImage";
import Logout from "../page/Logout";
import "../styles/header.css";

function Header() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const avatarRef = useRef(null);

  const togglePopup = () => {
    setPopupVisible((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (avatarRef.current && !avatarRef.current.contains(e.target)) {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <LogoImage img="/Logo-image.png" className="logo" />

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#" className="nav-link">
            Auctions
          </a>
          <Button className="sell-button">Sell a Car</Button>
        </nav>

        {/* Right Section */}
        <div className="right-section">
          {/* Search Bar */}
          <div className="search-container">
            <img src="/search.png" alt="search icon" className="search-icon" />
            <input
              type="text"
              placeholder="Search cars"
              className="search-bar"
            />
          </div>

          {/* Notification Icon */}
          <div className="icon">
            <img src="/bell.png" alt="bell icon" className="icon-style" />
          </div>

          {/* Avatar with Popup */}
          <div className="avatar" ref={avatarRef} onClick={togglePopup}>
            <img src="user.png" alt="user icon" className="avatar-icon" />
            {isPopupVisible && (
              <div className="popup-menu">
                <div className="popup-item">User</div>
                <Logout className="popup-item" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
