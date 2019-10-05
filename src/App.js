import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Statement from "./components/statement";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import PageNavbar from "./components/pageNavbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="background" />
        <PageNavbar />
        <div className="App">
          <div className="leftPadding" />
          <Statement />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <div className="rightPadding" />
        </div>
      </div>
    );
  }
}

export default App;
