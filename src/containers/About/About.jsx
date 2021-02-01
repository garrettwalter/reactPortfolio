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
                <h5 className="text-center blue py-2">
                Full-Stack web developer with developed skills in 
                                    JavaScript, MongoDB, mySQL, React.js, HTML & CSS, 
                                     Node.js, Express.js, Sequilize.js, NPM, bcrypt.js, 
                                     indexDB, API, GitHub & GitBash, Heroku, Bootstrap, 
                                     Chrome Developer tools, React Web Developer tools, 
                                     and responsive web design. Known by my peers as an 
                                     innovative problem solver with a passion for new 
                                     ideas about developing apps, alongside a focus on 
                                     mobile-first design and development. Each project 
                                     I engage myself in, the aim is to engage the target 
                                     audience with impactful data, and a user-friendly 
                                     design.
                </h5>
            </div>
            <div className="row justify-content-center">
                <img src="./me2.JPG" alt="me standing" />
            </div>
            <div className="row">
                <p className="text-center blue mb-3 pb-3">This App was created with REACT</p>
            </div>
        </div>
    );
}

export default About;