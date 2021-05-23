import React from "react";
import "./style.css"

function Footer () {
        return (
           
        <footer class="page-footer indigo lighten-1">
        <div class="container">
            <div class="row">
            <div class="col">
                <h5 class="white-text">Thanks for viewing my page!</h5>
                <p class="grey-text text-lighten-4">If you liked my page, connect with me through my contact page</p>
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