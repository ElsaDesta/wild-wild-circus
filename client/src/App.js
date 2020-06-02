import React from 'react';
import "./StyleSheets/global.scss";
import './App.css';
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
           <Home />
        </Route>
    
     </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
