import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Projects/Project';
import Resume from '../Resume/Resume';
const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Project" component={Project} />
        <Route path="/Resume" component={Resume} />
    </Switch>
)


export default Main;