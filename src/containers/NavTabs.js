import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
<>
<nav class="navbar navbar-expand navbar-light navbar-bg sticky-top">
  <div class="container-fluid">
    <button><Link to="/" className={location.pathname === "/" ? "nav-link text-dark" : "nav-link text-dark"}>GMONEY</Link></button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
          <button className="btn nav-link dropdown-toggle text-dark projects-tab" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </button>
          <ul className="dropdown-menu background-drop" aria-labelledby="navbarDropdown">
            <li><Link to="/graphicdesign" className={location.pathname === "/graphicdesign" ? "nav-link text-info" : "nav-link text-dark"}>GRAPHIC DESIGN</Link></li>
            <li><Link to="/website" className={location.pathname === "/website" ? "nav-link text-info" : "nav-link text-dark"}>WEB DEVELOPMENT</Link></li>
            <li><Link to="/socialmedia" className={location.pathname === "/socialmedia" ? "nav-link text-info" : "nav-link text-dark"}>SOCIAL MEDIA MANAGEMENT</Link></li>
            <li><Link to="/ads" className={location.pathname === "/ads" ? "nav-link text-info" : "nav-link text-dark"}>ADVERTISING STRATEGY</Link></li>
          </ul>
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
