import React, { Component } from 'react';
import {Paper} from 'material-ui';
import {TextField} from 'material-ui';

class AccountHolderInformation extends Component {

    render(){
        return(
            <Paper className="login-page" zDepth={3}>
            <TextField className="login-user-text" hintText="Username" floatingLabelText="Username or Email"/><br/>
            <TextField className="login-pass-text" hintText="Password" floatingLabelText="Password" type="password"/>
            </Paper>   
        );     
    }
}

export default AccountHolderInformation;