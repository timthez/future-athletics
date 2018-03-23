import React, { Component } from 'react';
import {Paper} from 'material-ui';
import {TextField} from 'material-ui';
import {SelectField} from 'material-ui';
import {MenuItem} from 'material-ui';


class OrgainizationInformation extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, index, value) => this.setState({value});

  render(){
    const { classes } = this.props;
    return(
      <Paper className="login-page" zDepth={3}>
        <TextField className="account-org-name-text" hintText="Name" floatingLabelText="Organization Name"/>
        <br/>
        <SelectField
          floatingLabelText="Organization Type"
          style = {{textAlign: 'left'}}
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="University" />
          <MenuItem value={2} primaryText="Middle School" />
          <MenuItem value={3} primaryText="High School" />
          <MenuItem value={4} primaryText="Running Club" />
          <MenuItem value={5} primaryText="Professional" />
        </SelectField>
        <br/>
        <TextField classname="account-org-address1-text" hintText="Address" floatingLabelText="Address Line 1"/>
        <br/>
        <TextField classname="account-org-address2-text" hintText="Address" floatingLabelText="Address Line 2"/>
        <br/>
        <TextField classname="account-org-zip-text" hintText="Zip Code" floatingLabelText="Zip Code"/>
        <br/>
        <TextField classname="account-org-city-text" hintText="City" floatingLabelText="City"/>
        <br/>
        <TextField classname="account-org-state-text" hintText="State" floatingLabelText="State"/>
        <br/>
        <TextField classname="account-org-country-text" hintText="Country" floatingLabelText="Country"/>
      </Paper>   
    );     
  }
}

export default OrgainizationInformation;