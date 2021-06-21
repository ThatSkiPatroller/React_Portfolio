import React from "react";
import Header from '../components/Header';
import { Button, Grid } from '@material-ui/core';
import { GithubLoginButton, LinkedInLoginButton } from 'react-social-login-buttons';
import '../pagesStyle/contactStyle.css';


function Contact () {
  const something = {
    backgroundColor: '#9c27b0',
    color: 'white',
    height: '50px',
    marginTop: '10px'
  }

  const something2 = {
    backgroundColor: '#ff1744',
    color: 'white',
    height: '50px',
    marginTop: '20px'
  }

  const something3 = {
    width: '215px',
    marginTop: '10px'
  }

  const something4 = {
    width: '200px'
  }

  const margin = {
    padding: '200px'
  }

  const margin2 = {
    padding: '35px'
  }

    return (
        <div>
          <Header header='Contact Information and Links!'/> 
          <div style={margin2} />
          <div class="gradient-border" id="box">
            <Grid container justify='center' direction='column' align='center' >
              <Grid item>
                <GithubLoginButton onClick={() => window.location = 'https://github.com/ThatSkiPatroller'} style={something4}><span>My Github Page</span></GithubLoginButton>
              </Grid>
              <Grid item >
                <LinkedInLoginButton style={something3} onClick={() => window.location = 'https://linkedin.com/in/trace-suiter'}>My Linkedin Page</LinkedInLoginButton>
              </Grid>
              <Grid item>
                <Button variant='contained' size='large' style={something}>Phone Number: 936-671-3228</Button>
              </Grid>
              <Grid item>
                <Button variant='contained' size='large' style={something2}>E-mail: t.suit@utexas.edu</Button>
              </Grid>
            </Grid>
          </div> 
          <div style={margin} />
        </div>
       
    )
}

export default Contact;