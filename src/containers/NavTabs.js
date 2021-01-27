import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
<>
<nav class="navbar navbar-expand-lg navbar-light navbar-bg">
  <div class="container-fluid">
    <a className="navbar-brand" href="/">GMONEY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/projects" className={location.pathname === "/projects" ? "nav-link text-primary" : "nav-link text-dark"}>Projects</Link>
        </li>
        <li className="nav-item">
        <Link to="/resume" className={location.pathname === "/resume" ? "nav-link text-primary" : "nav-link text-dark"}>Resume</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link text-primary" : "nav-link text-dark"}>Contact</Link>
        </li>
        <li className="nav-item">
      <Link to="/about" className={location.pathname === "/about" ? "nav-link text-primary" : "nav-link text-dark"}>About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </>   
  );
}

export default NavTabs;
