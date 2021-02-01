import React from "react";
import './index.css';
import { HashRouter as Router, Route} from "react-router-dom";
import NavTabs from "./containers/NavTabs";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";
import Resume from "./containers/Resume/Resume";
import About from "./containers/About/About";
import Footer from "./containers/Footer";

const App = () => {
  return (
      <Router basename="/">
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/astronet" component={About} />
          <Route exact path="/covidcost" component={About} />
          <Route exact path="/neonpeach" component={About} />
          <Route exact path="/dayplanner" component={About} />
          <Route exact path="/budgetapp" component={About} />
          <Route exact path="/userdirectory" component={About} />
          <Footer/>
      </Router>
    );
};

export default App;
