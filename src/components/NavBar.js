import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/login page">Login</Link>
        </li>
        <li>
          <Link to="/Page not found">Error 404</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
