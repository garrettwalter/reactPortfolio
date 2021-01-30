import React from "react";
import './index.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "./containers/NavTabs";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";
import Resume from "./containers/Resume/Resume";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";
import Footer from "./containers/Footer";

const App = () => {
  return (
      <Router>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Footer/>
      </Router>
    );
};

export default App;
