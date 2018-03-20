import React, { Component } from 'react';
import {Paper} from 'material-ui';
import {TextField} from 'material-ui';

class OrgainizationInformation extends Component {

  render(){
    return(
      <Paper className="login-page" zDepth={3}>
        <TextField className="login-user-text" hintText="Name" floatingLabelText="Organization Name"/>
        <br/>
        <TextField className="login-pass-text" hintText="Type" floatingLabelText="Organization Type"/>
      </Paper>   
    );     
  }
}

export default OrgainizationInformation;