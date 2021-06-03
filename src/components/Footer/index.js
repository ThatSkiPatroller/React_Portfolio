import React from "react";
import "./style.css"
import { Container, Grid, Box, Link } from '@material-ui/core';

function Footer () {
        return (

        // <footer>
        //     <Box
        //        />
        //     <Container maxWidth='lg' align='center' >
        //         <Grid container spacing={5} >
        //             <Grid item xs={12} sm={12} >
        //                 <Box borderBottom={1} bgcolor='#9575cd' color='white'>Thanks for viewimg my page!</Box>
        //                 <Box color='blue' bgcolor='#9575cd'>
        //                     <Link href='/' >
        //                         Home
        //                     </Link>
        //                 </Box>
        //                 <Box bgcolor='#9575cd'>
        //                     <Link href='/Projects' >
        //                         Projects
        //                     </Link>
        //                 </Box>
        //                 <Box bgcolor='#9575cd'>
        //                     <Link href='/Contact'  >
        //                         Contact
        //                     </Link>
        //                 </Box>
        //                 <Box bgcolor='#9575cd'>
        //                     <Link href='/Resume' >
        //                         Resume
        //                     </Link>
        //                 </Box>
        //             </Grid>
        //         </Grid>
        //         <Box textAlign='center' bgcolor='#9575cd' pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
        //             Trace Suiter &reg; {new Date().getFullYear()}
        //         </Box>
        //     </Container>
        // </footer>
           



        <footer class="page-footer indigo lighten-1">
        <div class="container">
            <div class="row">
            <div class="col">
                <h5 class="white-text">Thanks for viewing my page!</h5>
                <p class="grey-text text-lighten-4">If you liked my page, connect with me <br></br>through my contact page</p>
            </div>
            <div class="col">
                <h5 class="white-text">Links</h5>
                <ul>
                <li><a class="grey-text text-lighten-3" href="/">Home</a></li>
                <li><a class="grey-text text-lighten-3" href="/Projects">Projects</a></li>
                <li><a class="grey-text text-lighten-3" href="/Contact">Contact</a></li>
                <li><a class="grey-text text-lighten-3" href="/Resume">Resume</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">  
            © 2014 Trace Suiter Copyright 
            <a class="grey-text text-lighten-4 right" href="#!"></a>
            </div>
        </div>
        </footer>
    );
    
}

export default Footer;