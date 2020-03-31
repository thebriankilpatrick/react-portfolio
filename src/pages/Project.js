import React from "react";
import BodyClassName from 'react-body-classname';

function Project() {
    return (
        <div>
            <BodyClassName className="green lighten-3"></BodyClassName>
            <div class="container">
                <div class="row">
                    <div className="card col l4 m6 s12">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="#"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">Link to</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;