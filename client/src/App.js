import React, {Component} from "react";
import "./StyleSheets/global.scss";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Acts from "./pages/Acts";
import Admin from "./pages/Admin";
import Tickets from "./pages/Tickets";
import SuggestionBox from "./pages/SuggestionBox";
import { BrowserRouter as Router, Route, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="page" timeout={500}>
      <Switch location={location}>
        <Route path="/" component={Home} exact />
        <Route path="/acts" component={Acts} />
        <Route path="/ideas" component={SuggestionBox} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));



 class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <NavBar />
        
        <AnimatedSwitch />
        
        <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
