import React, { Component } from 'react';
import logo from '../assets/images/panda.svg';
import './Routes.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './pages/landing_page/landing_page.js';

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path="/" component={LandingPage}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Routes;
