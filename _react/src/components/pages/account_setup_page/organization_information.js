import React, { Component } from 'react';
import { TextField, SelectField, Paper, MenuItem} from 'material-ui';
import OrganizationStore from '../../../stores/organization_store'


class OrgainizationInformation extends Component {
  store = OrganizationStore.instance();
  state = this.store.state.organization;

  componentDidMount() {
    this.store.subscribe(this.onOrganizationStoreChange);
  }

  componentWillUnmount() {
    this.store.unsubscribeAll();
  }

  onOrganizationStoreChange = () => {
    this.setState(this.store.state.organization);
  }

  render(){
    const { classes } = this.props;
    return(
      <Paper className="login-page" zDepth={3}>
        <TextField className="account-org-name-text" hintText="Name" floatingLabelText="Organization Name"
          name="organization.name" data-type="string" onChange={this.store.updateFieldFromInput} value={this.state.name} />
        <br/>
        <SelectField
          floatingLabelText="Organization Type"
          style = {{textAlign: 'left'}}
          value={this.state.type}
          onChange={this.store.updateFieldFromSelect.bind(this.store, "organization.type", "string")}
        >
          <MenuItem value="UNIVERSITY" primaryText="University" />
          <MenuItem value="MIDDLE_SCHOOL" primaryText="Middle School" />
          <MenuItem value="HIGH_SCHOOL" primaryText="High School" />
          <MenuItem value="RUNNING_CLUB" primaryText="Running Club" />
          <MenuItem value="PROFESSIONAL" primaryText="Professional" />
        </SelectField>
        <br/>
        <TextField classname="account-org-address1-text" hintText="Address" floatingLabelText="Address Line 1"
          name="organization.address_1" data-type="string" onChange={this.store.updateFieldFromInput} value={this.state.address_1}/>
        <br/>
        <TextField classname="account-org-address2-text" hintText="Address" floatingLabelText="Address Line 2"
          name="organization.address_2" data-type="string" onChange={this.store.updateFieldFromInput} value={this.state.address_2}/>
        <br/>
        <TextField classname="account-org-zip-text" hintText="Zip Code" floatingLabelText="Zip Code"
          name="organization.zip" data-type="string" onChange={this.store.updateFieldFromInput} value={this.state.zip}/>
        <br/>
        <TextField classname="account-org-city-text" hintText="City" floatingLabelText="City"
          name="organization.city" data-type="string" onChange={this.store.updateFieldFromInput} value={this.state.city}/>
        <br/>
        <TextField classname="account-org-state-text" hintText="State" floatingLabelText="State"
          name="organization.state" data-type="string" onChange={this.store.updateFieldFromInput} value={this.state.state}/>
        <br/>
        <TextField classname="account-org-country-text" hintText="Country" floatingLabelText="Country"
          name="organization.country" data-type="string" onChange={this.store.updateFieldFromInput} value={this.state.country}/>
      </Paper>
    );
  }
}

export default OrgainizationInformation;