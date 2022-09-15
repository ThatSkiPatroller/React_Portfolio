import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
  const location = useLocation();


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-auto" >
                <Link to="/" className={location.pathname === "/" ? "nav-link active set" : "nav-link set"}>
                  Home
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active set" : "nav-link set"}>
                  Projects
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active set" : "nav-link set"}>
                  Contact
                </Link>
              </li> 
              <li className="nav-item ms-auto">
                <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active set" : "nav-link set"}>
                  Resume
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default Navbar;