import MainNav from "./MainNav";
import LogoImage from "./LogoImage";
import "../styles/Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }
  return (
    <aside className="aside-style">
      <LogoImage img="/Logo-image.png" className="logo" onClick={handleClick} />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
