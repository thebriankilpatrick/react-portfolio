import React from "react";
import "./About.css";

function About() {
    return (
        <div>
            <div className="col s12 m12 l8">
                <div className="card horizontal">
                    <div className="card-image">
                        
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>Some long story about me</p>
                        </div>
                        <div className="card-action">
                            <a href="/projects">See My Work</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;