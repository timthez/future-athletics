import React, { Component } from 'react';
import {Paper} from 'material-ui';
import {TextField} from 'material-ui';
import {SelectField} from 'material-ui';
import {MenuItem} from 'material-ui';

class BillingInformation extends Component {
  state = {
    billingType: 0,
    bankAccountType: 0
  };

  handleChange = (event, index, value) => this.setState({billingType: value});

  handleBankAccountChange = (event, index, value) => this.setState({bankAccountType: value});

  getBillingTypeContent(type){
    switch (type){
      case 1 : 
        return this.getCreditCardFields();
      case 2 :
        return this.getBankInformationFields();
      default : 
        return "";
    }
  }

  getCreditCardFields(){
    return (
      <div>
        <TextField className="billing-credit-name" hintText="Account Name" floatingLabelText="Account Name"/>
        <br/>
        <TextField className="billing-credit-number" hintText="Credit Card Number" floatingLabelText="Card Number"/>
      </div>
    );
  }

  getBankInformationFields(){
    return(
      <div>
          <SelectField
          floatingLabelText="Account Type"
          style={{textAlign: 'left'}}
          value={this.state.bankAccountType}
          onChange={this.handleBankAccountChange}
          >
            <MenuItem value={1} primaryText="Checking" />
            <MenuItem value={2} primaryText="Savings" />
          </SelectField>
          <br/>
          <TextField className="billing-bank-routing" hintText="Bank Routing Number" floatingLabelText="Routing Number"/>
          <br/>
          <TextField className="billing-bank-account" hintText="Bank Account Number" floatingLabelText="Account Number"/>
      </div>
    );
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