import React from 'react';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './component/main';

function App() {
  return (<div className="demo-big-content">
  <Layout>
      <Header title="Charles' Portfolio" scroll>
          <Navigation>
              <Link to="/aboutMe">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
          </Navigation>
      </Header>
      <Drawer title="Charles Williams' Portfolio">
          <Navigation>
              <Link to="/aboutMe">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
          </Navigation>

      </Drawer>
      <Content>
          <div className="page-content" />
          <Main/>
      </Content>
  </Layout>
</div>

  );
}

export default App;
