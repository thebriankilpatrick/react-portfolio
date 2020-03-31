import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
// import Footer from "./components/Footer";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router >
      <div>
        <Header ></Header>
        <Wrapper>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Project}/>
        </Wrapper>
        <Footer ></Footer>
      </div>
    </Router>
  );
}

export default App;

/* <Wrapper>
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/projects" component={Project}/>
  <Route exact path="/resume" component={Resume}/>
</Wrapper> */