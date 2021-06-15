import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayText from "./DisplayText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learn React
        <img src={logo} className="App-logo" alt="logo" />
        <DisplayText />
      </header>
    </div>
  );
}

export default App;
