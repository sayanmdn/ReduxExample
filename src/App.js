import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component'
import ReduxDemo from './reduxDemo'
import ReduxDemo2 from './ReduxDemo2.js'
import reduxDemoCombine from './reduxDemoCombine'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Header />
        </div>
        <br></br>
        <div>
          <ReduxDemo />
        </div>
        <br></br>
        <div>
        <ReduxDemo2 />
        </div>
        <br></br>
        <div>
          <reduxDemoCombine />
        </div>
      </div>
    );
  }
}

export default App;
