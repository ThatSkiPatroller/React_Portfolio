import React from "react";
import Header from '../components/Header';
import { Button } from '@material-ui/core';

function Contact () {
  const something = {
    
  }

    return (
        <div>
        <Header header='Contact Information and Links!' />
        <div className="collection center" style={something}>
          <Button variant='outlined' href="https://twitter.com/SuiterTrace" className="collection-item blue white-text center">My Twitter Page</Button><br /><br />
          <Button href="https://github.com/ThatSkiPatroller" className="collection-item grey black-text center">My Github Page</Button><br /><br />
          <Button href="https://linkedin.com/in/trace-suiter" className="collection-item blue darken-4 white-text center">My Linkedin Page</Button><br /><br />
          <a className="collection-item purple white-text">Phone Number: 936-671-3228</a><br /><br />
          <a className="collection-item teal white-text">E-mail: t.suit@utexas.edu</a><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        </div>
    )
}

export default Contact;