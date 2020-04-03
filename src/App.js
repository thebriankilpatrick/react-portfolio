import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import projects from "./projects.json";
import './App.css';

class App extends Component {
  state = {
    projects
  }

  render() {
    return (
      <Router >
        <div>
          <Header ></Header>
          <Wrapper>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={About}/>
            <div className="container">
              <div className="row">
                {this.state.projects.map(project => (
                  <Route exact path="/projects" component={() => <Project 
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    link={project.link}
                    github={project.github}
                    img={project.img}
                  />}
                  />
                ))}
              </div>
            </div>
            <Route exact path="/resume"/>
          </Wrapper>
          <Footer ></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
