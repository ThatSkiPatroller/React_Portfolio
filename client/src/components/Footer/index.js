import React from "react";
import "./style.css"
import { Link, useLocation } from "react-router-dom";

function Footer () {
    const firstBar = {
        backgroundColor: 'rgb(251, 223, 186)',
        textAlign: 'center',
    }

    const copyright = {
        backgroundColor: 'rgb(245, 200, 141)'
    }
    const location = useLocation();
    
    return (
        <div>
            <footer class="glass pt-4">
                <section class="mb-4">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active disp" : "nav-link disp"}>
                        Home
                    </Link>
          
                    <Link to="/Projects" className={location.pathname === "/Projects" ? "nav-link active disp" : "nav-link disp"}>
                        Projects
                    </Link>
          
                    <Link to="/Contact" className={location.pathname === "/contact" ? "nav-link active disp" : "nav-link disp"}>
                        Contact
                    </Link>
          
                    <Link to="/Resume" className={location.pathname === "/resume" ? "nav-link active disp" : "nav-link disp"}>
                        Resume
                    </Link>
                </section>

                <div class="text-center p-4 bottom glass" >
                    © 2021 Copyright TraceSuiter.com
                </div>

            </footer>
        </div>
    );
}

export default Footer;

