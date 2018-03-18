import React, { Component } from 'react';
import {Paper} from 'material-ui';
import {TextField} from 'material-ui';

class AccountHolderInformation extends Component {

    render(){
        return(
            <Paper className="login-page" zDepth={3}>
            <TextField className="login-user-text" hintText="Account" floatingLabelText="Account Name"/><br/>
            <TextField className="login-pass-text" hintText="Bank" floatingLabelText="Bank Name"/>
            </Paper>   
        );     
    }
}

export default AccountHolderInformation;