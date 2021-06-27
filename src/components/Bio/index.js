import React, { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import './style.css';
import { Parallax } from 'react-parallax';
import image from '../Images/travel-1749508_1920.jpg';
import image2 from '../Images/mountaineer-2080138_1920.jpg';
import image3 from '../Images/austin-1402097_1920.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkiing, faServer, faCodeBranch, faCode, faAtom, faChevronDown, faLaughSquint, faExclamationTriangle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { keys } from '@material-ui/core/styles/createBreakpoints';


const inlineStyle = {
  borderStyle: 'solid',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '30px',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '60px',
}

const icons = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -10%)',
  color: 'white',
  fontSize: '60px',
  display: 'flex',
  flexDirection: 'row'
}

const threeBoxes = {
  color: 'white',
  fontSize: '21px',
  top: '30%',
  position: 'absolute',
  textShadow: '3px 0 black, 0 3px black, 3px 0 black, 0 3px black',
}

const iconic = {
  margin: '20px'
}

const locationIcon = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '60px',
  textShadow: '1px 0 black, 0 1px black, 1px 0 black, 0 1px black'
}

function Bio () {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1><FontAwesomeIcon icon={faExclamationTriangle} /></h1>
      <Parallax bgImage={image}  strength={700}>
        <div style={{ height: 500}}>
          <div style={inlineStyle} >
          <Typography variant='display2' className='firstbox'> 
            Hi, I'm Trace
        </Typography>
          </div>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faChevronDown} /></h1>
      <Parallax bgImage={image2}  strength={700}>
        <div style={{ height: 500}}>
          <div style={icons}><FontAwesomeIcon icon={faSkiing} style={iconic}/><FontAwesomeIcon icon={faServer} style={iconic}/><FontAwesomeIcon icon={faCodeBranch} style={iconic}/><FontAwesomeIcon icon={faCode} style={iconic}/><FontAwesomeIcon icon={faAtom} style={iconic}/></div>
          <Grid container direction='row' style={threeBoxes} justify='center'>
          
            <Grid  item xs={4} >
              <div className='firstBio'>
                <Typography variant='display2' className='firstText' ><b>
                Full stack web developer and graduate of The University of Texas at Austin with a bachelors in Biology, a Certificate in Health Professions and a Certificate in Full Stack Development
                </b></Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className='secondBio'>
                <Typography variant='display2' ><b>
                My core skills include JavaScript ES6+, CSS, HTML, Node.js, React.js, Mongoose/MongoDB, MySQL, NoSQL, Sequelize, Jest, jQuery,  Handlebars.js, ExpressJS, and GitHub/Git BASH 
                </b></Typography>
              </div>
            </Grid>
            <Grid  item xs={4}>
              <div className='thirdBio'>
                <Typography variant='display2'><b>
                 Experience working with development teams utilizing the scrum and agile framework on creative, strategic, and technical levels with fast decision making and teamworks skills
                </b></Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faChevronDown} /></h1>
      <Parallax bgImage={image3}  strength={700}>
        <div style={{ height: 500}}>
          <div style={locationIcon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} /><span> </span>
          <Typography variant='display2'> 
            Austin, Texas
        </Typography></div>
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