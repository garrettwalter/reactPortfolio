import React from 'react';

function Project(props) {
    return (
        <>
        <div className="row repo-btn">
            <a href={props.repo} className="btn btn-dark">{props.title} Repository</a>
        </div>
        <div className="container">
            <div className="row project-box">
               <iframe src={props.project} className="project-area"/> 
            </div>
        </div>
        </>
    );
}

export default Project;