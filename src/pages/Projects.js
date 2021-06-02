import React from "react";
import BudgetTracker from "../components/Images/Budget_Tracker_Card_Image.PNG";
import NoteTaker from "../components/Images/Note_Taker_Card_Image.PNG";
import WorkoutTracker from "../components/Images/Workout_Tracker_Card_Image.PNG";
import Project1 from "../components/Images/Project1_Card_Image.PNG";
import Project2 from "../components/Images/Project2_Card_Image.PNG";

function Projects () {
    return (
        <div>
            <h1>Projects Page</h1>

            <div class="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src={Project1} alt="Project1"></img>
                            <span className="card-title black-text"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src={BudgetTracker} alt="BudgetTracker"></img>
                            <span className="card-title black-text"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src={NoteTaker} alt="NoteTaker"></img>
                            <span className="card-title black-text"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src={Project2} alt="Project2"></img>
                            <span className="card-title black-text"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src={WorkoutTracker} alt="WorkoutTracker"></img>
                            <span className="card-title black-text"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://ThatSkiPatroller.github.io/ThatSkiPatroller.github.io-React_Portfolio/src/components/images/" alt="Ecommerce"></img>
                            <span className="card-title black-text"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://ThatSkiPatroller.github.io/ThatSkiPatroller.github.io-React_Portfolio/src/components/images/" alt="TechBlog"></img>
                            <span className="card-title black-text"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;