import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Home(props) {

    const location = useLocation();

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
                <a href="/astronet" className="btn btn-walter">
                    <Link to="/astronet" className={location.pathname === "/astronet" ? "btn-walter" : "btn-walter"}>Astronet</Link>
                </a>
            </div>
        </div>
        <div className="row top-row blue">
            <h3 className="text-center">Class Group Projects</h3>
        </div>
        <div className="row btn-row py-3">
            <div className="repo-btn">
                <a href="/covidcost" className="btn btn-garrett">
                <Link to="/covidcost" className={location.pathname === "/covidcost" ? "btn-garrett" : "btn-garrett"}>Covid-Cost</Link>
                </a>
                <a href="/neonpeach" className="btn btn-garrett mx-1">
                <Link to="/neonpeach" className={location.pathname === "/neonpeach" ? "btn-garrett" : "btn-garrett"}>Astronet</Link>
                </a>
            </div>
        </div>
        <div className="row blue-bg top-row grey">
            <h3 className="text-center">Homework</h3>
        </div>
        <div className="row blue-bg btn-row py-3">
            <div className="repo-btn">
                <a href="/budgetapp" className="btn btn-walter">
                    <Link to="/budgetapp" className={location.pathname === "/budgetapp" ? "btn-walter" : "btn-walter"}>Budget App</Link>
                </a>
                <a href="/userdirectory" className="btn btn-walter mx-1">
                    <Link to="/userdirectory" className={location.pathname === "/userdirectory" ? "btn-walter" : "btn-walter"}>User Directory</Link>
                </a>
                <a href="/dayplanner" className="btn btn-walter">
                    <Link to="/dayplanner" className={location.pathname === "/dayplanner" ? "btn-walter" : "btn-walter"}>Day Planner</Link>
                </a>
            </div>
        </div>
        <div className="row top-row blue">
            <h3 className="text-center">Resume</h3>
        </div>
        <div className="row btn-row bottom-row py-3">
            <div className="repo-btn">
                <a href="/resume" className="btn btn-garrett">
                    <Link to="/resume" className={location.pathname === "/resume" ? "btn-garrett" : "btn-garrett"}>Resume</Link>
                </a>
            </div>
        </div>
      
        </>
    );
}

export default Home;