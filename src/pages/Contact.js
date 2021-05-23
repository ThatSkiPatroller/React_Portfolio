import React from "react";

function Contact () {
    return (
        <div>
        <h1 className="center"><b>Contact Information and Links!</b></h1>
        <div className="collection center">
          <a href="https://twitter.com/SuiterTrace" className="collection-item blue white-text center">My Twitter Page</a><br />
          <a href="https://github.com/ThatSkiPatroller" className="collection-item grey black-text center">My Github Page</a><br />
          <a href="https://linkedin.com/in/trace-suiter" className="collection-item blue darken-4 white-text center">My Linkedin Page</a><br />
          <a className="collection-item purple white-text">Phone Number: 936-671-3228</a><br />
          <a className="collection-item teal white-text">E-mail: t.suit@utexas.edu</a>
        </div>
        </div>
    )
}

export default Contact;