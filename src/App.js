import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main';
import {Link} from 'react-router-dom';
import './App.css';
import './newlogo.png'

function App() {
  return (
    <div className="App" id="root">
      <div className="demo-big-content">
    <Layout>
  <Header className='header-color' title={<Link style={{textDecoration:'none', color: 'white'}} to="/">Joshua Abuto</Link>}  scroll>
            <Navigation>
                <Link to="/resume">Resume</Link >
                <Link to="/aboutme">About Me</Link >
                <Link to="/projects">Projects</Link >
                <Link to="/contact">Contact</Link >
            </Navigation>
        </Header>
        <Drawer className="drawer" title={<Link style={{textDecoration:'none', color: 'white'}} to="/">Joshua Abuto</Link>}  >
            <Navigation>
            <Link style={{color: 'white'}} to="/resume">Resume</Link >
                <Link style={{color: 'white'}} to="/aboutme" className="nav">About Me</Link >
                <Link style={{color: 'white'}} to="/projects" className="nav">Projects</Link >
                <Link style={{color: 'white'}} to="/contact" className="nav">Contact</Link >
            </Navigation>
            <div>
                <Link to="/contact">
                    <img
                        src = "./newlogo.png"
                        alt = "avatar"
                        className = "avatar-nav"
                        />
                </Link>
                
            </div>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    </div>
  );
}

export default App;
