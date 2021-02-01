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
    <button className="home-btn"><Link to="/" className={location.pathname === "/" ? "nav-link logo" : "nav-link logo"}>GARRETT WALTER</Link></button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
          <button className="btn nav-link dropdown-toggle grey projects-tab" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </button>
          <ul className="dropdown-menu background-drop" aria-labelledby="navbarDropdown">
            <li><Link to="/covidcost" className={location.pathname === "/covidcost" ? "nav-link text-info" : "nav-link grey"}>Covid Cost</Link></li>
            <li><Link to="/neonpeach" className={location.pathname === "/neonpeach" ? "nav-link text-info" : "nav-link grey"}>Neon Peach</Link></li>
            <li><Link to="/budgetapp" className={location.pathname === "/budgetapp" ? "nav-link text-info" : "nav-link grey"}>Budget App</Link></li>
            <li><Link to="/userdirectory" className={location.pathname === "/userdirectory" ? "nav-link text-info" : "nav-link grey"}>User Directory</Link></li>
            <li><Link to="/astronet" className={location.pathname === "/astronet" ? "nav-link text-info" : "nav-link grey"}>Astronet</Link></li>
            <li><Link to="/dayplanner" className={location.pathname === "/dayplanner" ? "nav-link text-info" : "nav-link grey"}>Day Planner</Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link to="/resume" className={location.pathname === "/resume" ? "nav-link text-primary" : "nav-link grey"}>Resume</Link>
        </li>
        <li className="nav-item">
      <Link to="/about" className={location.pathname === "/about" ? "nav-link text-primary" : "nav-link grey"}>About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </>   
  );
}

export default NavTabs;
