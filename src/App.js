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
          <Route exact path="/astronet" >
            <Project 
            project="https://astronetdigital.com" 
            title="Astronet" repo="https://github.com/garrettwalter/astronet"
            about="One of my current projects, Astronet Digital. This website is currently 
            under construction but will be used for a Web Dev/Digital Marketing Agency  
            a close friend of mine and I are attempting to launch in the coming months."
            />
          </Route>
          <Route exact path="/covidcost" >
            <Project 
            project="https://roccomaniscalco.github.io/covid-cost/" 
            title="Covid-Cost" repo="https://github.com/garrettwalter/covid-cost"
            about="As a US citizen I would like to see a comparison on the economy and 
            Covid-19 levels so that I can have a better understanding of the financial 
            impact of the pandemic. When I manipulate the “open” “high” “closing” and 
            “date range” values. Then I am presented with data I want to see specific 
            to the economy that I can compare with the current Covid-19 rates. I would 
            also like to be able to receive actionable insights through data analysis. 
            This will allow me to thoroughly understand and insight into the correlation of the two subjects."
            />
          </Route>
          <Route exact path="/neonpeach" >
            <Project 
            project="https://neon-peach.herokuapp.com/" 
            title="Neon Peach" repo="https://github.com/garrettwalter/project-2-legislations"
            about="As a GA citizen, I want a platform that allows me to easily research 
            and interact with state legislation to influence the public policies that affect me. 
            NEON Peach utilizes node, express, express-handlebars, express-session, handlebars, 
            mysql2, sequelize, passport, passport-local, and the Bulma CDN to build an application 
            that allows users to create an account, login to their account, and interact with current 
            Georgia legislation."
            />
          </Route>
          <Route exact path="/dayplanner" >
            <Project 
            project="https://garrettwalter.github.io/daily-planner/" 
            title="Day Planner" repo="https://github.com/garrettwalter/daily-planner"
            about="A simple calendar application that allows a user to save events for each hour 
            of the day by modifying starter code. This app runs in the browser and feature dynamically 
            updated HTML and CSS powered by jQuery."
            />
          </Route>
          <Route exact path="/userdirectory" >
            <Project 
            project="https://garrettwalter.github.io/user-directory/" 
            title="User Directory" repo="https://github.com/garrettwalter/user-directory"
            about="An employee or manager would benefit greatly from being able to view 
            non-sensitive data about other employees. This application was built with React."
            />
          </Route>
          <Route exact path="/budgetapp" >
            <Project 
            project="https://nameless-reef-14501.herokuapp.com/" 
            title="Budget App" repo="https://github.com/garrettwalter/budget-app"
            about="GIVEN a user is on Budget App without an internet connection 
            WHEN the user inputs a withdrawal or deposit THEN that will be shown 
            on the page, and added to their transaction history when their connection is back online."
            />
          </Route>
          <Footer/>
      </Router>
    );
};

export default App;
