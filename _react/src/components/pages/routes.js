import React, { Component } from 'react';
// import './routes.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from '../shared/route'
import SignupPage from './signup_page/signup_page';
import LoginPage from './login_page/login_page';
import LandingPage from './landing_page/landing_page';

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/signup" component={SignupPage}/>
            <Route exact public path="/login" component={LoginPage}/>
            {/* TODO
            <Route path='*' exact={true} component={My404Component} />
            */}
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Routes;
