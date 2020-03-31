import React from "react";
import "./About.css";
import BodyClassName from 'react-body-classname';
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <BodyClassName className="teal lighten-3"></BodyClassName>
            <div class="container">
                <div className="col s12 m12 l8">
                    <div className="card horizontal">
                        <div className="card-image">

                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>My story begins in Richmond, VA.  I have always
                                    held an interest in technology, how things work,
                                    and what makes them tick.  I'm a problem solver
                                    by nature, and I love figuring things out.
                                </p>
                                <br></br>
                                <p>
                                    Throughout highschool, I had the obsession to 
                                    make my own iPhone app.  I made that dream a reality, 
                                    taught myself Objective C, and created some truely 
                                    horrific apps.  (Obviously none that were ever good enough
                                    to make it to the App Store)
                                </p>
                                <br></br>
                                <p>
                                    But alas, it was then, only a hobby.  A hobby that I set down
                                    during my college years and early twenties.
                                </p>
                                <br></br>
                                <p>
                                    My other passion in life was food.  I love to cook it, and I sure 
                                    love to eat it.  So, what did I do?  I did what any other rational
                                    human being does, I went to culinary school and worked in restaurants.
                                    If you thrive off of working 60 hour work weeks, and having no quality of 
                                    life, this might be a career path for you.
                                </p>
                                <br></br>
                                <p>
                                    Flash forward years later, I'm managing multiple F&B outlets, and I'm
                                    starting to rethink my life choices.  It was time to rekindle some
                                    old hobbies. 
                                </p>
                                <br></br>
                                <p>
                                   The Coding Boot Camp at University of Richmond came along, and it was time 
                                   to make the leap.  In this program, I learned all the necessary skills to 
                                   make my break into the tech field. 
                                </p>
                            </div>
                            <div className="card-action center-align">
                                <Link to="/projects"><a href="/projects">See My Work</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;