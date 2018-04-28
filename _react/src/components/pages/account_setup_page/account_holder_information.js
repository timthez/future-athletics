import React, { Component } from 'react';
import {Paper} from 'material-ui';
import {TextField} from 'material-ui';

class AccountHolderInformation extends Component {

  render(){
    return(
        <Paper className="login-page" zDepth={3}>
          <TextField className="account-user-text" hintText="Username" floatingLabelText="Username"/>
          <br/>
          <TextField className="account-pass-text" hintText="Password" floatingLabelText="Password" type="password"/>
          <br/>
          <TextField className="account-email-text" hintText="Email" floatingLabelText="Email" type="email"/>
          <br/>
          <TextField className="account-first-name-text" hintText="First Name" floatingLabelText="First Name"/>
          <br/>
          <TextField className="account-last-name-text" hintText="last Name" floatingLabelText="Last Name"/>
          <br/>
          <TextField className="account-birthday-text" hintText="Birth Day" floatingLabelText="Birthday"/>
          <br/>
          <TextField className="account-phone-text" hintText="Phone Number" floatingLabelText="Phone Number"/>
        </Paper>   
      );     
    }
  }

export default AccountHolderInformation;