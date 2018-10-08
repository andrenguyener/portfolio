import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, hashHistory } from "react-router-dom";
// import { Router, Route, IndexRoute, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    // const currentKey = window.location.pathname.split('/')[1] || '/'
    // const timeout = { enter: 300, exit: 200 }
    return (
      <div className="App">
        {/* <Router basename={process.env.PUBLIC_URL}> */}
        <Router>
          {/* <TransitionGroup component="main" className="page-main">
                        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear> */}
          <div className="page-main-inner">
            <Navbar />
            {/* <Switch location={window.location}> */}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            {/* </Switch> */}
          </div>
          {/* </CSSTransition>
                    </TransitionGroup> */}
        </Router>
      </div>
    );
  }
}

export default App;
