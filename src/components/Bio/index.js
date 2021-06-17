import React, { useState } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import './style.css';
import { Parallax } from 'react-parallax';
import image from '../Images/travel-1749508_1920.jpg';
import image2 from '../Images/mountaineer-2080138_1920.jpg';
import image3 from '../Images/austin-1402097_1920.jpg';


// https://mui.wertarbyte.com/#material-ui-image

const inlineStyle = {
  borderStyle: 'solid',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '60px'
}

function Bio () {
  return (
    <div style={{ textAlign: 'center' }}>
      <Parallax bgImage={image}  strength={500}>
        <div style={{ height: 500}}>
          <div style={inlineStyle}>
          <Typography variant='display2'> 
            Hi, I'm Trace
        </Typography>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={image2}  strength={500}>
        <div style={{ height: 500}}>
          <div style={inlineStyle}>
          <Typography variant='display2'> 
            Hi, I'm Trace
        </Typography>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={image3}  strength={500}>
        <div style={{ height: 500}}>
          <div style={inlineStyle}>
          <Typography variant='display2'> 
            Hi, I'm Trace
        </Typography>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      {/* <Grid container >
        <Typography variant='body' > 
        Full stack web developer and graduate of The University of Texas at Austin with a bachelors in Biology, a minor in French and a Certificate in Full Stack Development. My core skills include JavaScript, CSS, HTML, Node/React.js as well as an extensive background in teamwork through being part of a patrol unit for the National Ski Patrol. Decision making is another characteristic I have developed as an Outdoor Emergency Care Technician where the environment is fast paced and decisions can be life altering. Unique in my healthcare background, I have come to find a passion in Web Development and Medical Software where I can help people in a different way.  My inclination to always be learning something new has played a big part in my achievements, and I intend to keep educating myself throughout my future roles.
        </Typography>
      </Grid>  */}
      </div>
      
    )
}

export default Bio;