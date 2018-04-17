import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from '../shared/route'
import SignupPage from './signup_page/signup_page';
import LoginPage from './login_page/login_page';
import LandingPage from './landing_page/landing_page';
import $ from 'jquery';
import Auth from 'j-toker';
import AuthConfig from './auth_config';
import history from '../shared/history';
// $.auth.emailSignUp({
//   email: 'test@test.com',
//   password: '12345678',
//   password_confirmation: '12345678'
// });


class Routes extends Component {
  componentDidMount(){
    AuthConfig.fail(() => {
      this.forceUpdate()
    })
  }
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact public path="/" component={LandingPage}/>
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
