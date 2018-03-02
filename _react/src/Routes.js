import React, { Component } from 'react';
import logo from './panda.svg';
import './Routes.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Temporary Component for route
const Default = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/Routes.js</code> and save to reload.
    </p>
  </div>
);
class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Route path="/" component={Default}/>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Routes;
