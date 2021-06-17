import React, { useState } from 'react';
import { Grid, Typography, Container, Image } from '@material-ui/core';
import imagehaha from '../BioImages/pattern.jpg'; 


// https://mui.wertarbyte.com/#material-ui-image


function Bio () {
  return (
    <div>
      <Grid container >
        <Typography variant='body' > 
        Full stack web developer and graduate of The University of Texas at Austin with a bachelors in Biology, a minor in French and a Certificate in Full Stack Development. My core skills include JavaScript, CSS, HTML, Node/React.js as well as an extensive background in teamwork through being part of a patrol unit for the National Ski Patrol. Decision making is another characteristic I have developed as an Outdoor Emergency Care Technician where the environment is fast paced and decisions can be life altering. Unique in my healthcare background, I have come to find a passion in Web Development and Medical Software where I can help people in a different way.  My inclination to always be learning something new has played a big part in my achievements, and I intend to keep educating myself throughout my future roles.
        </Typography>
      </Grid> 
      </div>
      
    )
}

export default Bio;