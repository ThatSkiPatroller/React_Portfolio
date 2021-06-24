import React from "react";
import "./style.css"
import { Container, Grid, Box, Link } from '@material-ui/core';

function Footer () {
    const firstBar = {
        backgroundColor: 'rgb(251, 223, 186)',
        textAlign: 'center',
    }

    const copyright = {
        backgroundColor: 'rgb(245, 200, 141)'
    }
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
                 <li><a href="/" className='brown-text'>Home</a></li>
                 <li><a href="/Projects" className='brown-text'>Projects</a></li>
                 <li><a href="/Contact" className='brown-text'>Contact</a></li>
                 <li><a href="/Resume" className='brown-text'>Resume</a></li>
                 </ul>
                </Grid>
            </Grid>
            <div style={copyright}>
                <div className="container brown-text center">  
                © 2021 Trace Suiter Copyright 
                </div>
            </div>
            </div>

        // <footer className="page-footer">
        // <div className="container center">
        //     <div className="row">
        //     <div className="col brown-text righty">
        //         <h5>Thanks for viewing my page!</h5>
        //         <p>If you liked my page, connect with me <br></br>through my contact page --></p>
        //     </div>
        //     <div className="col pt">
        //         <h5 className='brown-text'>Links</h5>
        //         <ul>
        //         <li><a href="/" className='brown-text'>Home</a></li>
        //         <li><a href="/Projects" className='brown-text'>Projects</a></li>
        //         <li><a href="/Contact" className='brown-text'>Contact</a></li>
        //         <li><a href="/Resume" className='brown-text'>Resume</a></li>
        //         </ul>
        //     </div>
        //     </div>
        // </div>
        // <div className="footer-copyright">
        //     <div className="container brown-text center">  
        //     © 2021 Trace Suiter Copyright 
        //     </div>
        // </div>
        // </footer>
    );
}

export default Footer;

