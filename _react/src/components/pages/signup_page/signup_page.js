import React, { Component } from 'react';
import UserStore from '../../../stores/user_store';
import {Link} from 'react-router-dom';
import Layout from '../../shared/layout.js';
import Validator from '../../shared/validator.js';
class SignupPage extends Component {
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
        Signup
        <input name="user.username" data-type="string" onChange={this.store.updateFieldFromInput} value={this.state.user.username} ></input>
        <Link to="/login" >Click ME</Link>
      </Layout>
    );
  }
}

export default SignupPage;
