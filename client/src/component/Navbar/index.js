import React from "react";
import './style.css';

function Navbar () {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">

            <a class="logo" href="#">
                        
            </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar"><i class="fas fa-bars"></i></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link active" href="#" data-scroll-nav="0">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-scroll-nav="1">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-scroll-nav="2">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-scroll-nav="3">Portfolio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-scroll-nav="4">Resume</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-scroll-nav="5">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    )
}

export default Navbar;