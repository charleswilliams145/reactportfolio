import React from 'react';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './componet/main';
function App() {
  return (<div className="demo-big-content">
  <Layout>
      <Header title="Title" scroll>
          <Navigation>
              <Link to="/about">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
          </Navigation>
      </Header>
      <Drawer title="Title">
          <Navigation>
              <Link to="/about">About Me</Link>
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
