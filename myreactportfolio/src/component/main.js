import Landing from './landing';
import Aboutme from './aboutMe';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';
import { Switch, Route } from 'react-router-dom';
import React from 'react';




const Main = () => (
<Switch>
    <Route exact path="/" Component={Landing} />
    <Route  path="/aboutMe" Component={Aboutme} />
    <Route  path="/contact" Component={Contact} />
    <Route path="/resume" Component={Resume} />
    <Route  path="/projects" Component={Projects} />
</Switch>
)


export default Main;
