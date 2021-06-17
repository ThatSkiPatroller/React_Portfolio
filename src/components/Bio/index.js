import React, { useState } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import './style.css';
import { Parallax } from 'react-parallax';
import image from '../Images/travel-1749508_1920.jpg';
import image2 from '../Images/mountaineer-2080138_1920.jpg';
import image3 from '../Images/austin-1402097_1920.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkiing, faServer, faCodeBranch, faCode, faAtom, faChevronDown, faLaughSquint, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { keys } from '@material-ui/core/styles/createBreakpoints';


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

const icons = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -10%)',
  color: 'white',
  fontSize: '60px',
}

const threeBoxes = {
  color: 'white',
  fontSize: '20px',
  top: '50%',
  position: 'absolute',

}

const box1 = {
  transform: 'translate(15%, -30%)',
  
}

const box2 = {
  transform: 'translate(6%, -30%)',
  
}

const box3 = {
  transform: 'translate(15%, -30%)',
 
}

const iconic = {
  margin: '20px'
}

function Bio () {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1><FontAwesomeIcon icon={faExclamationTriangle} /></h1>
      <Parallax bgImage={image}  strength={700}>
        <div style={{ height: 500}}>
          <div style={inlineStyle}>
          <Typography variant='display2'> 
            Hi, I'm Trace
        </Typography>
          </div>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faChevronDown} /></h1>
      <Parallax bgImage={image2}  strength={700}>
        <div style={{ height: 500}}>
          <div style={icons}><FontAwesomeIcon icon={faSkiing} style={iconic}/><FontAwesomeIcon icon={faServer} style={iconic}/><FontAwesomeIcon icon={faCodeBranch} style={iconic}/><FontAwesomeIcon icon={faCode} style={iconic}/><FontAwesomeIcon icon={faAtom} style={iconic}/></div>
          <Grid container direction='row' style={threeBoxes}>
            <Grid container item xs center alignText='center' style={box1}>
              <div >
                <Typography variant='display2'> 
                Full stack web developer and graduate <br></br>of The University of Texas at Austin <br></br>with a bachelors in Biology, a minor <br></br>in French and a Certificate in<br></br> Full Stack Development
                </Typography>
              </div>
            </Grid>
            <Grid container item center xs style={box2}>
              <div>
                <Typography variant='display2'> 
                My core skills include JavaScript, CSS, <br></br>HTML, Node.js, React.js, Mongoose/MongoDB, MySQL, Sequelize, Jest, <br></br>jQuery,  Handlebars.js, ExpressJS, and GitHub/Git BASH as well as <br></br> an extensive background in teamwork
                </Typography>
              </div>
            </Grid>
            <Grid container item center xs style={box3}>
              <div>
                <Typography variant='display2'> 
                Being apart of the National Ski Patrol I <br></br>have learned how to make split second <br></br>decisions where circumstances can often be <br></br>life altering. I take every mistake as <br></br>a learning experience
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faChevronDown} /></h1>
      <Parallax bgImage={image3}  strength={700}>
        <div style={{ height: 500}}>
          <div style={inlineStyle}>
          <Typography variant='display2'> 
            Hi, I'm Trace
        </Typography>
          </div>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faLaughSquint} /></h1>
      {/* <Grid container >
        <Typography variant='body' > 
        Full stack web developer and graduate of The University of Texas at Austin with a bachelors in Biology, a minor in French and a Certificate in Full Stack Development. My core skills include JavaScript, CSS, HTML, Node/React.js as well as an extensive background in teamwork through being part of a patrol unit for the National Ski Patrol. Decision making is another characteristic I have developed as an Outdoor Emergency Care Technician where the environment is fast paced and decisions can be life altering. Unique in my healthcare background, I have come to find a passion in Web Development and Medical Software where I can help people in a different way.  My inclination to always be learning something new has played a big part in my achievements, and I intend to keep educating myself throughout my future roles.
        </Typography>
      </Grid>  */}
      </div>
      
    )
}

export default Bio;