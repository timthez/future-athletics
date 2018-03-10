import React, { Component } from 'react';
import UserStore from '../../../stores/user_store';
import Layout from '../../shared/layout.js';
import {Paper} from 'material-ui';
import {TextField} from 'material-ui';
import {RaisedButton} from 'material-ui';
import {FlatButton} from 'material-ui';
import './login_page.css';

class LoginPage extends Component {
  store = UserStore.instance();
  state = this.store.state;

  componentDidMount(){
    this.store.subscribe(this.onUserStoreChange);
  }

  componentWillUnmount() {
    this.store.unsubscribeAll();
  }

  onUserStoreChange = () => {
    this.setState(this.store.state);
  }

  render() {
    return (
      <Layout>
        <Paper className="login-page" zDepth={3}>
          <TextField className="login-user-text" hintText="Username or Email" floatingLabelText="Username or Email"/>
          <TextField className="login-pass-text" hintText="Password" floatingLabelText="Password" type="password"/><br />
          <RaisedButton className="login-login-btn" label="LOGIN" primary={true}/>
          <FlatButton className="login-forgot-btn" label="Forgot Password" />
        </Paper>
      </Layout>
    );
  }


}

export default LoginPage;
