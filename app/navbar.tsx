import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to="/orders/obsolete/test">Test</NavLink>
        <NavLink to="/orders/obsolete/dashboard">Dashboard</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
