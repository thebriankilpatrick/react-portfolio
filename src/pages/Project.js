import React from "react";
import BodyClassName from 'react-body-classname';
import "./Project.css";

function Project(props) {
    return (
        <div>
            <BodyClassName className="green lighten-3"></BodyClassName>
            <div className="card col l4 m6 s12">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator projectImg" alt={props.title + " Image"} src={props.img}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
                    <p><a className="projectLink" href={props.link} target="_blank" rel="noopener noreferrer">Link to {props.title}</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
                    <p>{props.description}</p>
                    <p>{props.tech}</p>
                    <p><a className="projectLink" href={props.github} target="_blank" rel="noopener noreferrer">Github Page</a></p>
                </div>
            </div>
        </div>
    )
}

export default Project;