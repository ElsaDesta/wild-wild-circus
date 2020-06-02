import React from 'react';
import "./StyleSheets/global.scss";
import './App.css';
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
     <Home />
    </div>
  );
}

export default App;
