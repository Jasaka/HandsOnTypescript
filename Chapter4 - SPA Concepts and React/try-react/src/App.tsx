import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import AnotherScreen from "./AnotherScreen";
import {Switch, Route} from "react-router";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload. Boop!<br/>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/another" component={AnotherScreen}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;
