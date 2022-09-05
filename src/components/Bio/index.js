import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import './style.css';
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkiing, faServer, faCodeBranch, faCode, faAtom, faChevronDown, faLaughSquint, faExclamationTriangle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


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
  background: 'rgba(255,255,255, 0.5)',
  color: 'black',
  fontSize: '21px',
  top: '30%',
  position: 'absolute',
  // textShadow: '2px 0 white, 0 2px white, 2px 0 white, 0 2px white',
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
    <div style={{ textAlign: 'center', fontFamily: 'Bree Serif' }}>
      <h1><FontAwesomeIcon icon={faExclamationTriangle} /></h1>
      <Parallax bgImage="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio12.jpg"  strength={700}>
        <div style={{ height: 500}}>
          <div style={inlineStyle} >
          <Typography variant='display2' className='firstbox'>
            Hi, I'm Trace
        </Typography>
          </div>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faChevronDown} /></h1>
      <Parallax bgImage="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio6.jpg"  strength={700}>
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
                 Experience working with development teams utilizing the scrum and agile framework on creative, strategic, and technical levels with fast decision making and teamwork skills
                </b></Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faChevronDown} /></h1>
      <Parallax bgImage="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio1.jpg"  strength={700}>
        <div style={{ height: 500}}>
          <div style={locationIcon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} /><span> </span>
          <Typography variant='display2'> 
            Austin, Texas
        </Typography></div>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faLaughSquint} /></h1>
      </div>
    )
}

export default Bio;