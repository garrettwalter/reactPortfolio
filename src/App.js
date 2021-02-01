import React from "react";
import './index.css';
import { HashRouter as Router, Route} from "react-router-dom";
import NavTabs from "./containers/NavTabs";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";
import Resume from "./containers/Resume/Resume";
import About from "./containers/About/About";
import Footer from "./containers/Footer";
import Project from "./containers/Project/Project";

const App = () => {
  return (
      <Router basename="/">
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/astronet" ><Project project="https://astronetdigital.com" title="Astronet" repo="https://github.com/garrettwalter/astronet"/></Route>
          <Route exact path="/covidcost" ><Project project="https://roccomaniscalco.github.io/covid-cost/" title="Covid-Cost" repo="https://github.com/garrettwalter/covid-cost"/></Route>
          <Route exact path="/neonpeach" ><Project project="https://neon-peach.herokuapp.com/" title="Neon Peach" repo="https://github.com/garrettwalter/project-2-legislations"/></Route>
          <Route exact path="/dayplanner" ><Project project="https://garrettwalter.github.io/daily-planner/" title="Day Planner" repo="https://github.com/garrettwalter/daily-planner"/></Route>
          <Route exact path="/userdirectory" ><Project project="https://garrettwalter.github.io/user-directory/" title="User Directory" repo="https://github.com/garrettwalter/user-directory"/></Route>
          <Route exact path="/budgetapp" ><Project project="https://nameless-reef-14501.herokuapp.com/" title="Budget App" repo="https://github.com/garrettwalter/budget-app"/></Route>
          <Footer/>
      </Router>
    );
};

export default App;
