import React from "react";
import './style.css';

function Portfolio () {
    return (
        <section class="portfolio section-padding position-re" data-scroll-index="3">
            <div class="container">
                <div class="row">
                    <div class="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <h4>Portfolio</h4>
                    </div>
                    
                    <div class="filtering text-center col-sm-12">
                        <span data-filter='*' class="active">All</span>
                        <span data-filter='.brand'>Commercial</span>
                        <span data-filter='.web'>Personal</span>
                        <span data-filter='.graphic'>Group</span>
                    </div>
                    <div class="clearfix"></div>
                    
                    <div class="gallery text-center full-width">
                        
                        <div class="items graphic">
                            <div class="item-img">
                                <img src="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio9.PNG" alt="image"/>
                                <div class="item-img-overlay valign">
                                    <div class="overlay-info full-width vertical-center">
                                        <h6>Bootcamp Project 1</h6>
                                        <p>In this project I collaborated with two other teammates to create an app that gives you a Youtube playlist based on the weather in your current city!</p>
                                    </div>
                                    <a href="img/portfolio/1.jpg" class="popimg">
                                        <i class="icofont icofont-image"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="items web">
                            <div class="item-img">
                                <img src="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio3.PNG" alt="image"/>
                                <div class="item-img-overlay valign">
                                    <div class="overlay-info full-width vertical-center">
                                        <h6>Budget Tracker</h6>
                                        <p>This application allows the user to keep track and manage their budget. It functions as a PWA and works both online and offline with MongoDB</p>
                                    </div>
                                    <a href="img/portfolio/2.jpg" class="popimg">
                                        <i class="icofont icofont-image"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="items width2 graphic">
                            <div class="item-img">
                                <img src="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio7.PNG" alt="image"/>
                                <div class="item-img-overlay valign">
                                    <div class="overlay-info full-width vertical-center">
                                        <h6>Note Taker</h6>
                                        <p>This application allows the user to write, save, and delete notes through an interactive front-end. Uses express server with GET and POST routes</p>
                                    </div>
                                    <a href="img/portfolio/3.jpg" class="popimg">
                                        <i class="icofont icofont-image"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="items width2 brand">
                            <div class="item-img">
                                <img src="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio10.PNG" alt="image"/>
                                <div class="item-img-overlay valign">
                                    <div class="overlay-info full-width vertical-center">
                                        <h6>Bootcamp Project 2</h6>
                                        <p>I collaborated with two other teammates to create Git Jokes which is an app that allows users to post jokes to a twitteresque feed as well as post random jokes to our twitter page from our database.</p>
                                    </div>
                                    <a href="img/portfolio/4.jpg" class="popimg">
                                        <i class="icofont icofont-image"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="items brand">
                            <div class="item-img">
                                <img src="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio13.PNG" alt="image"/>
                                <div class="item-img-overlay valign">
                                    <div class="overlay-info full-width vertical-center">
                                        <h6>Workout Tracker</h6>
                                        <p>This application allows the user to keep track of their workouts with specific imputs that count time intervals, reps, type of excersize and more</p>
                                    </div>
                                    <a href="img/portfolio/5.jpg" class="popimg">
                                        <i class="icofont icofont-image"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="items web">
                            <div class="item-img">
                                <img src="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio2.PNG" alt="image"/>
                                <div class="item-img-overlay valign">
                                    <div class="overlay-info full-width vertical-center">
                                        <h6>Project Three</h6>
                                        <p>This final project for the UT Austin Coding Bootcamp works as a car maintenance website where the user can add vehicles, as well as make appointments. This project was a team effort with me and two other developers.</p>
                                    </div>
                                    <a href="img/portfolio/6.jpg" class="popimg">
                                        <i class="icofont icofont-image"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="items brand">
                            <div class="item-img">
                                <img src="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio5.PNG" alt="image"/>
                                <div class="item-img-overlay valign">
                                    <div class="overlay-info full-width vertical-center">
                                        <h6>GraphQL Job Board</h6>
                                        <p>This application is a Job Board site that implements GraphQL as well as Apollo Client with the React.js library. This application is not deployed but can be cloned from my GitHub.</p>
                                    </div>
                                    <a href="img/portfolio/7.jpg" class="popimg">
                                        <i class="icofont icofont-image"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="items brand">
                            <div class="item-img">
                                <img src="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio4.PNG" alt="image"/>
                                <div class="item-img-overlay valign">
                                    <div class="overlay-info full-width vertical-center">
                                        <h6>GraphQL Chat App</h6>
                                        <p>This is a chat application that uses GraphQL, Apollo, React and WebSocket API to give all the users real-time event-driven responses. This application is not deployed but can be cloned from my GitHub</p>
                                    </div>
                                    <a href="img/portfolio/7.jpg" class="popimg">
                                        <i class="icofont icofont-image"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="items brand">
                            <div class="item-img">
                                <img src="https://d1wedsacc4lfnu.cloudfront.net/react_portfolio11.PNG" alt="image"/>
                                <div class="item-img-overlay valign">
                                    <div class="overlay-info full-width vertical-center">
                                        <h6>README.md Generator</h6>
                                        <p>This application runs in the terminal, prompting the user with questions about the project. The answers are used to generate a README.MD file for the user</p>
                                    </div>
                                    <a href="img/portfolio/7.jpg" class="popimg">
                                        <i class="icofont icofont-image"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <svg class="wave dark" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xml:space="preserve"><path style="" d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg> */}
        </section>
    )
}

export default Portfolio;