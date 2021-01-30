import React from 'react';

function Resume(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2"/>
                <div id="resume" className="col-sm-8 stuff pt-3 mt-3">
                    <a className="nav-link repo text-center" href="https://resume.io/r/TVTiYCqe2">Click for Resume with working Links</a>
                    <div className="row">
                        <div className="col-sm-12 PIC">
                            <img className="resumePIC rp1" alt="Resume.1" src="./resume1.png"/>
                            <img className="resumePIC rp2" alt="Resume.2" src="./resume2.png"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"/>
            </div>
        </div>
    );
}

export default Resume;