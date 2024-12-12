import { NavLink } from "react-router-dom";
import "../styles/mainNav.css";

function MainNav() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/todo"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span>Todo</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/user"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span>User</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
