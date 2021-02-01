import React from 'react';

function About(props) {
    return (
        <div className="container about-box">
            <div className="row">
                <h1 className="text-center blue">Hi, i'm Garrett</h1>
            </div>
            <div className="row justify-content-center">
                <img src="./me.jpg" alt="me"/>
            </div>
            <div className="row">
                <h3 className="text-center blue">Hi, i'm Garrett</h3>
            </div>
            <div className="row justify-content-center">
                <img alt="me standing" src="./me2.jpg"/>
            </div>
            <div className="row">
                <h3 className="text-center blue">Hi, i'm Garrett</h3>
            </div>
        </div>
    );
}

export default About;