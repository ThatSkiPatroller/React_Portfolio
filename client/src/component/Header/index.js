import React from "react";
import './style.css'

function Header () {
    return (
        <header class="header valign bg-img position-re" data-scroll-index="0" data-overlay-dark="4" data-background="https://d1wedsacc4lfnu.cloudfront.net/towerpic.webp" data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row">
                <div class="full-width text-center caption mt-50">
                    <h2 class="blc">Welcome!</h2>
                    <h1 class="cd-headline push">
                        <span class="blc">I am</span>
                        <span class="cd-words-wrapper">
                          <b class="is-visible">Trace Suiter</b>
                          <b>Web Design</b>
                          <b>&nbsp; Development</b>
                        </span>
                    </h1>
                    <div class="social mt-30">
                        <a href="https://github.com/ThatSkiPatroller"><i class="icofont icofont-social-github"></i></a>
                        <a href="https://www.linkedin.com/in/trace-suiter/"><i class="icofont icofont-brand-linkedin"></i></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;