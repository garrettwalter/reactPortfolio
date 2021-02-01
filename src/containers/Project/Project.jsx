import React from 'react';

function Project(props) {
    return (
        <>
        <div className="row py-3">
            <h1 className="text-center pt-2 blue">{props.title}</h1>
            <p className="text-center blue my-3">{props.about}</p>
        </div>
        <div className="row btn-row py-3">
            <div className="repo-btn">
                <a href={props.repo} className="btn btn-garrett">{props.title} Repository</a>
            </div>
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