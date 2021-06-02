import React from "react";
import BudgetTracker from "../components/Images/Budget_Tracker_Card_Image.PNG";
import NoteTaker from "../components/Images/Note_Taker_Card_Image.PNG";
import WorkoutTracker from "../components/Images/Workout_Tracker_Card_Image.PNG";
import Project1 from "../components/Images/Project1_Card_Image.PNG";
import Project2 from "../components/Images/Project2_Card_Image.PNG";
import ProjCard from '../components/ProjCard';
import { Grid, Typography } from '@material-ui/core';
import Header from '../components/Header';

function Projects () {
    return (
        <div>
            <Header header='Projects' />
            <Grid container>
                <ProjCard name='Project 1' img={Project1}
                description="In this project I collaborated with two other teammates to create an app that gives you a Youtube playlist based on the weather in your current city!" />
                <ProjCard name='Budget Tracker' img={BudgetTracker}
                description='This application allows the user to keep track and manage their budget' />
                <ProjCard name='Note Taker' img={NoteTaker}
                description='This application allows the user to write, save, and delete notes' />
                <ProjCard name='Project 2' img={Project2}
                description='In this project I worked with collaboraters to make an application that allows users to post jokes to a twitteresque feed as well as post random jokes from our twitter page.' />
                <ProjCard name='Workout Tracker' img={WorkoutTracker}
                description='This application allows the user to keep track of their workouts with specific imputs that count time intervals, reps, type of excersize and more' />
                <ProjCard name='Budget Tracker' img={BudgetTracker}
                description='This application allows the user to keep track and manage their budget' />
            </Grid>
        </div>
    )
}

export default Projects;