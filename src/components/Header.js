import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  
  return (
    <div>
      <h1>React Router</h1>

      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="users"
            >
              Users
            </NavLink>
          </li>
       
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="hotels"
            >
              Hotels
            </NavLink>
          </li>

        </ul>
      </nav>

      <hr />

      <Outlet />

      
    </div>
  );
};

export default Header;
