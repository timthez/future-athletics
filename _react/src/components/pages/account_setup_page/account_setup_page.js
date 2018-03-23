import React, { Component } from 'react';
import UserStore from '../../../stores/user_store';
import Layout from '../../shared/layout.js';
import OrgainizationInformation from '../account_setup_page/organization_information.js';
import AccountHolderInformation from '../account_setup_page/account_holder_information.js';
import BillingInformation from '../account_setup_page/billing_information.js';
import {Paper} from 'material-ui';
import {TextField} from 'material-ui';
import {
    Step,
    Stepper,
    StepLabel,
  } from 'material-ui/Stepper';
  import RaisedButton from 'material-ui/RaisedButton';
  import FlatButton from 'material-ui/FlatButton';

class AccountSetupPage extends Component {
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
    
    render(){
        return(
            <Layout>
                <AccountSetupStepper></AccountSetupStepper>
            </Layout>
        );
    }
}

/**
 * Basic skeletal structure taken from Material UI example
 */
class AccountSetupStepper extends React.Component {

    state = {
      finished: false,
      stepIndex: 0,
    };
  
    handleNext = () => {
      const {stepIndex} = this.state;
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      });
    };
  
    handlePrev = () => {
      const {stepIndex} = this.state;
      if (stepIndex > 0) {
        this.setState({stepIndex: stepIndex - 1});
      }
    };
  
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
              return <OrgainizationInformation/>;
            case 1:
              return <AccountHolderInformation/>;
            case 2:
              return <BillingInformation/>;
          }
    }
  
    render() {
      const {finished, stepIndex} = this.state;
      const contentStyle = {margin: '0 16px'};
  
      return (
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Orgainization Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Account Holder Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Billing Information</StepLabel>
            </Step>
          </Stepper>
          <div>
              
          </div>
          <div style={contentStyle}>
            {finished ? (
              <p>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false});
                  }}
                >
                  Click here
                </a> to reset the example.
                <br/>
                <a href="/login">Click here</a> to return to the login page.
              </p>
            ) : (
              <div>
                <p>{this.getStepContent(stepIndex)}</p>
                <div style={{marginTop: 12}}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onClick={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }

export default AccountSetupPage;