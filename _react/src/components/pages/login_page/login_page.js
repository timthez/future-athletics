import React, { Component } from 'react';
import UserStore from '../../../stores/user_store';
import Layout from '../../shared/layout.js';

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
        Login
        <input type="string" name="user.username" data-type="string" onChange={this.store.updateFieldFromInput} value={this.state.user.username} ></input>
      </Layout>
    );
  }
}

export default LoginPage;
