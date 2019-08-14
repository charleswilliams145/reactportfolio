import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Aboutme from './aboutMe';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';




const Main = () => (   <Switch>
        <Route exact path="/" Component={Landing} />
        <Route exact path="/aboutMe" Component={Aboutme} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/resume" Component={Resume} />
        <Route exact path="/projects" Component={Projects} />
    </Switch>
)


export default Main;
