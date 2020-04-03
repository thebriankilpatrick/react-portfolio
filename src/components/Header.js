import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="transparent">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo hide-on-med-and-down">Brian Kilpatrick</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/brianKilpatrickResume.PDF" target="_blank">Resume</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;