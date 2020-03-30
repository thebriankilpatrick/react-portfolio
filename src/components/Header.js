import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="grey darken-4">
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Brian Kilpatrick</Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header;