import React from "react";
import BudgetTracker from "../components/Images/Budget_Tracker_Card_Image.PNG";
import NoteTaker from "../components/Images/Note_Taker_Card_Image.PNG";
import WorkoutTracker from "../components/Images/Workout_Tracker_Card_Image.PNG";
import Project1 from "../components/Images/Project1_Card_Image.PNG";
import Project2 from "../components/Images/Project2_Card_Image.PNG";
import ProjCard from '../components/ProjCard';
import { Grid, Typography } from '@material-ui/core';
import Header from '../components/Header';
import Project3 from '../components/Images/AutoWizardPicture.PNG';

function Projects () {
    const space = {
        padding: '300px'
    }
    return (
        <div>
            <Header header='Projects' />
            <Grid container justify='center' >
                <ProjCard name='Project 1' img={Project1} repo='https://github.com/wmccone/WeatherTunes' deployed='https://wmccone.github.io/WeatherTunes/'
                description="In this project I collaborated with two other teammates to create an app that gives you a Youtube playlist based on the weather in your current city!" />
                <ProjCard name='Budget Tracker' img={BudgetTracker} repo='https://github.com/ThatSkiPatroller/Budget_Tracker' deployed='https://blooming-woodland-31154.herokuapp.com/'
                description='This application allows the user to keep track and manage their budget. It functions as a PWA and works both online and offline with MongoDB' />
                <ProjCard name='Note Taker' img={NoteTaker} repo='https://github.com/ThatSkiPatroller/Note-Taker' deployed='https://polar-beach-03042.herokuapp.com/'
                description='This application allows the user to write, save, and delete notes through an interactive front-end. Uses express server with GET and POST routes' />
                <ProjCard name='Project 2' img={Project2} repo='https://github.com/ashleyhayjin/projectTwo' deployed='http://limitless-bayou-89275.herokuapp.com/'
                description='Git Jokes is an app that allows users to post jokes to a twitteresque feed as well as post random jokes from our twitter page.' />
                <ProjCard name='Workout Tracker' img={WorkoutTracker} repo='https://github.com/ThatSkiPatroller/Workout_Tracker' deployed='https://murmuring-castle-90808.herokuapp.com/?id=6096c87dbc07e0001504648c'
                description='This application allows the user to keep track of their workouts with specific imputs that count time intervals, reps, type of excersize and more' />
                <ProjCard name='Project Three' img={Project3} repo='https://github.com/ThatSkiPatroller/AutoMaintenance' deployed='https://obscure-cove-65281.herokuapp.com/'
                description='This final project for the UT Austin Coding Bootcamp works as a car maintenance website where the user can add vehicles, as well as make appointments.'/>
            </Grid>
            <div style={space}/>
        </div>
    )
}

export default Projects;