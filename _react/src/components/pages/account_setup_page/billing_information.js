import React, { Component } from 'react';
import {Paper} from 'material-ui';
import {TextField} from 'material-ui';
import {SelectField} from 'material-ui';
import {MenuItem} from 'material-ui';

class BillingInformation extends Component {
  state = {
    billingType: 0,
  };

  handleChange = (event, index, value) => this.setState({billingType: value});

  getBillingTypeContent(type){
    switch (type){
      case 1 : 
        return <TextField className="billing-bank-name" hintText="Bank Name" floatingLabelText="Bank Name"/>;
      case 2 :
        return <TextField className="billing-account-name" hintText="Account Name" floatingLabelText="Account Name"/>;
      default : 
        return "";
    }
  }

  render(){
    return(
        <Paper className="login-page" zDepth={3}>
          <SelectField
          floatingLabelText="Type"
          style= {{textAlign: 'left'}}
          value={this.state.billingType}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Credit Card" />
          <MenuItem value={2} primaryText="E-check" />
        </SelectField>
          <div>
            {this.getBillingTypeContent(this.state.billingType)}
          </div>
        </Paper>
      );     
    }
  }

export default BillingInformation;