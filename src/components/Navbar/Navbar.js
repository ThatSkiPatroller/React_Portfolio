import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography } from '@material-ui/core';
import "./style.css";

function Navbar() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav>
    <div className="nav-wrapper">
      <a href="/home" class="brand-logo left"></a>
      <ul id="nav" class="right hide-on-med-and-down">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
      </ul>
    </div>
    </nav>
  );
}

export default Navbar;