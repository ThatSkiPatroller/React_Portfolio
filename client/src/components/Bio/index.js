import React from 'react';
import { Typography } from '@material-ui/core';
import './style.css';
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkiing, faServer, faCodeBranch, faCode, faAtom, faChevronDown, faLaughSquint, faExclamationTriangle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const inlineStyle = {
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
  color: 'black',
  top: '20%',
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

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
}

function Bio () {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Bree Serif' }}>
      <Parallax bgImage="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio12.jpg"  strength={700}>
        <div style={{ height: 500}} >
          <div style={inlineStyle}>
          <Typography variant='display2' className='firstbox'>
            Trace's Portfolio
        </Typography>
          </div>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faChevronDown} /></h1>
      <Parallax bgImage="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio6.jpg" strength={700}>
        <div className="inSkiImage">
          <Slider {...settings}>
              <div className='container card' align='center'>
                <b>
                Full stack web developer and graduate of The University of Texas at Austin with a bachelors in Biology, a Certificate in Health Professions and a Certificate in Full Stack Development
                </b>
              </div>
              <div className='container card' align='center'>
                <b>
                My core skills include JavaScript ES6+, CSS, HTML, Node.js, React.js, Mongoose/MongoDB, MySQL, NoSQL, Sequelize, Jest, jQuery,  Handlebars.js, ExpressJS, and GitHub/Git BASH 
                </b>
              </div>
              <div className='container card' align='center'>
                <b>
                 Experience working with development teams utilizing the scrum and agile framework on creative, strategic, and technical levels with fast decision making and teamwork skills
                </b>
              </div>
          </Slider>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faChevronDown} /></h1>
      <Parallax bgImage="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio1.jpg"  strength={700}>
        <div style={{ height: 500}}>
          <div style={locationIcon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} /><span> </span>
            Austin, Texas
          </div>
        </div>
      </Parallax>
      <h1><FontAwesomeIcon icon={faLaughSquint} /></h1>
      </div>
    )
}

export default Bio;