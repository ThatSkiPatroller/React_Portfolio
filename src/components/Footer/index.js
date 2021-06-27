import React from "react";
import "./style.css"
import { Link, useLocation } from "react-router-dom";
import { Grid } from '@material-ui/core';

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
            <Grid container style={firstBar} justify='center' alignItems='center'>
                <Grid item xs={3} >
                    <h6 className='brown-text'>Thanks for viewing my page!</h6>
                    <p className='brown-text'>Please feel free to reach out <br></br>through my Contact page</p>
                </Grid>
                <Grid item xs={3}>
                    <h5 className='brown-text'>Links</h5>
                <ul>
                    <li>
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/Resume" className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                            Resume
                        </Link>
                    </li>
                </ul>
                </Grid>
            </Grid>
            <div style={copyright}>
                <div className="container brown-text center">  
                © 2021 Trace Suiter Copyright 
                </div>
            </div>
            </div>
    );
}

export default Footer;

