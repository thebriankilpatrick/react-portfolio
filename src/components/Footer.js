import React from "react";
import "../App.css";

function Footer() {
    return (
        <div className="footerOfTheFooters">
            <footer className="page-footer transparent center-align">
                <div className="footer">
                    <i className="fas fa-envelope fa-2x"></i>
                    <a className="footerIcon" href="https://github.com/thebriankilpatrick" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                    <a className="footerIcon" href="https://www.linkedin.com/in/thebriankilpatrick/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;