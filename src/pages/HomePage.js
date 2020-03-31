import React from "react";
import "./HomePage.css";
import BodyClassName from 'react-body-classname';
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <BodyClassName className="homeBody"></BodyClassName>
            <div className="container center-align">
                <div className="homePageTxt">
                    <h1>Hi, I'm Brian Kilpatrick</h1>
                    <h4>Full Stack Web Developer</h4>
                    <h4>Richmond, VA</h4>
                    <Link to="/about"><i class="fas fa-sort-down fa-4x"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;