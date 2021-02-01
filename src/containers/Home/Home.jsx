import React from 'react';

function Home(props) {
    return (
        <>
        <div className="row blue-bg top-row grey">
            <img className="me" alt="me" src="./me.jpg"/>
        </div>
        <div className="row blue-bg top-row grey">
            <h3 className="text-center">Personal Projects</h3>
        </div>
        <div className="row blue-bg btn-row py-3">
            <div className="repo-btn">
                <a href="/astronet" className="btn btn-walter">Astronet</a>
            </div>
        </div>
        <div className="row top-row blue">
            <h3 className="text-center">Class Group Projects</h3>
        </div>
        <div className="row btn-row py-3">
            <div className="repo-btn">
                <a href="/covidcost" className="btn btn-garrett">Covid-Cost</a>
                <a href="/neonpeach" className="btn btn-garrett mx-1">Neon Peach</a>
            </div>
        </div>
        <div className="row blue-bg top-row grey">
            <h3 className="text-center">Homework</h3>
        </div>
        <div className="row blue-bg btn-row py-3">
            <div className="repo-btn">
                <a href="/budgetapp" className="btn btn-walter">Budget App</a>
                <a href="/userdirectory" className="btn btn-walter mx-1">User Directory</a>
                <a href="/dayplanner" className="btn btn-walter">Day Planner</a>
            </div>
        </div>
        <div className="row top-row blue">
            <h3 className="text-center">Resume</h3>
        </div>
        <div className="row btn-row bottom-row py-3">
            <div className="repo-btn">
                <a href="/resume" className="btn btn-garrett">Resume</a>
            </div>
        </div>
      
        </>
    );
}

export default Home;