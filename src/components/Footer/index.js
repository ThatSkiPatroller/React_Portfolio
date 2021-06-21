import React from "react";
import "./style.css"
import { Container, Grid, Box, Link } from '@material-ui/core';

function Footer () {
        return (

        <footer className="page-footer">
        <div className="container center">
            <div className="row">
            <div className="col brown-text righty">
                <h5>Thanks for viewing my page!</h5>
                <p>If you liked my page, connect with me <br></br>through my contact page --></p>
            </div>
            <div className="col pt">
                <h5 className='brown-text'>Links</h5>
                <ul>
                <li><a href="/React_Portfolio" className='brown-text'>Home</a></li>
                <li><a href="/React_Portfolio/Projects" className='brown-text'>Projects</a></li>
                <li><a href="/React_Portfolio/Contact" className='brown-text'>Contact</a></li>
                <li><a href="/React_Portfolio/Resume" className='brown-text'>Resume</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container brown-text center">  
            © 2021 Trace Suiter Copyright 
            </div>
        </div>
        </footer>
    );
}

export default Footer;