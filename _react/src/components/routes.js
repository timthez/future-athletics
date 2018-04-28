import React, { Component } from 'react';
import logo from '../assets/images/panda.svg';
import './routes.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignupPage from './pages/signup_page/signup_page';
import LoginPage from './pages/login_page/login_page';
import AccountSetupPage from './pages/account_setup_page/account_setup_page';

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
          <Switch>
            <Route exact path="/" component={Default}/>
            <Route exact path="/signup" component={SignupPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/account-setup" component={AccountSetupPage}/>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Routes;
