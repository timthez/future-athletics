import styles from './login_page.module.sass';
import React, { Component } from 'react';
import UserStore from '../../../stores/user_store';
import Layout from '../../shared/layout.js';
import {Paper} from 'material-ui';
import {TextField, RaisedButton, FlatButton} from 'material-ui';

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
        <Paper className={styles['login-page']} zDepth={3}>
          <TextField hintText="Username or Email" floatingLabelText="Username or Email" fullWidth={true}/>
          <TextField hintText="Password" floatingLabelText="Password" type="password" fullWidth={true}/><br />
          <RaisedButton className={styles['login-login-btn']} label="LOGIN" primary={true}/>
          <FlatButton className={styles['login-forgot-btn']} label="Forgot Password" />
        </Paper>
      </Layout>
    );
  }


}

export default LoginPage;
