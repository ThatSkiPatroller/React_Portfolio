import React from "react";
import ProjCard from '../components/ProjCard';
import { Grid } from '@material-ui/core';
import Header from '../components/Header';

function Projects () {
    const space = {
        padding: '300px'
    }
    return (
        <div>
            <Header header='Professional Work' />
            <Grid container justify='center'>
                <ProjCard name='Pineywoods OBGYN Website' image="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio8.jpg" repo='https://github.com/thatskipatroller/pineywoodsobgyn' deployed='https://pineywoodsobgyn.com'
                description="This is a website I designed and built for a Dr's office that uses React.js" />
            </Grid>
            <Header header='Projects' />
            <Grid container justify='center' >
                <ProjCard name='Project 1' img="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio9.PNG" repo='https://github.com/wmccone/WeatherTunes' deployed='https://wmccone.github.io/WeatherTunes/'
                description="In this project I collaborated with two other teammates to create an app that gives you a Youtube playlist based on the weather in your current city!" />
                <ProjCard name='Budget Tracker' img="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio3.PNG" repo='https://github.com/ThatSkiPatroller/Budget_Tracker' deployed='https://blooming-woodland-31154.herokuapp.com/'
                description='This application allows the user to keep track and manage their budget. It functions as a PWA and works both online and offline with MongoDB' />
                <ProjCard name='Note Taker' img="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio7.PNG" repo='https://github.com/ThatSkiPatroller/Note-Taker' deployed='https://polar-beach-03042.herokuapp.com/'
                description='This application allows the user to write, save, and delete notes through an interactive front-end. Uses express server with GET and POST routes' />
                <ProjCard name='Project 2' img="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio10.PNG" repo='https://github.com/ashleyhayjin/projectTwo' deployed='http://limitless-bayou-89275.herokuapp.com/'
                description='I collaborated with two other teammates to create Git Jokes which is an app that allows users to post jokes to a twitteresque feed as well as post random jokes to our twitter page from our database.' />
                <ProjCard name='Workout Tracker' img="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio13.PNG" repo='https://github.com/ThatSkiPatroller/Workout_Tracker' deployed='https://murmuring-castle-90808.herokuapp.com/?id=6096c87dbc07e0001504648c'
                description='This application allows the user to keep track of their workouts with specific imputs that count time intervals, reps, type of excersize and more' />
                <ProjCard name='Project Three' img="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio2.PNG" repo='https://github.com/ThatSkiPatroller/AutoMaintenance' deployed='https://obscure-cove-65281.herokuapp.com/'
                description='This final project for the UT Austin Coding Bootcamp works as a car maintenance website where the user can add vehicles, as well as make appointments. This project was a team effort with me and two other developers.'/>
                <ProjCard name='GraphQL Job Board' img="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio5.PNG" repo='https://github.com/ThatSkiPatroller/GraphQL_JobBoard' description='This application is a Job Board site that implements GraphQL as well as Apollo Client with the React.js library. This application is not deployed but can be cloned from my GitHub.' />
                <ProjCard name='GraphQL Chat App' img="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio4.PNG" repo='https://github.com/ThatSkiPatroller/GraphQL_Chat' description='This is a chat application that uses GraphQL, Apollo, React and WebSocket API to give all the users real-time event-driven responses. This application is not deployed but can be cloned from my GitHub'/>
                <ProjCard name='README.md Generator' img="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio11.PNG" repo='https://github.com/ThatSkiPatroller/README-Generator' description='This application runs in the terminal, prompting the user with questions about the project. The answers are used to generate a README.MD file for the user' />
            </Grid>
            <div style={space}/>
        </div>
    )
}

export default Projects;