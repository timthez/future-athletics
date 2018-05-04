import React, { Component } from 'react';
import { TextField, SelectField, Paper, MenuItem} from 'material-ui';
import OrganizationStore from '../../../stores/organization_store'
import Binder from '../../shared/binder'
// import Constants from '../../../../../app/constants'
import _ from 'lodash';
class OrgainizationInformation extends Component {

  render(){
    const { classes } = this.props;
    return(
      <Paper className="login-page" zDepth={3}>
        <Binder store={OrganizationStore.instance()}>
          <TextField className="account-org-name-text" hintText="Name" floatingLabelText="Organization Name" name="organization.name" data-type="string" />
          <br/>
          <SelectField
            floatingLabelText="Organization Type"
            style = {{textAlign: 'left'}}
            name="organization.type"
            data-type="string"
          >
            {_(global.Organization.types).map((k,v) => <MenuItem key={v} value={v} primaryText={k} />).value()}
          </SelectField>
          <br/>
          <TextField className="account-org-address1-text" hintText="Address" floatingLabelText="Address Line 1"
            name="organization.address_1" data-type="string"/>
          <br/>
          <TextField className="account-org-address2-text" hintText="Address" floatingLabelText="Address Line 2"
            name="organization.address_2" data-type="string"/>
          <br/>
          <TextField className="account-org-zip-text" hintText="Zip Code" floatingLabelText="Zip Code"
            name="organization.zip" data-type="string"/>
          <br/>
          <TextField className="account-org-city-text" hintText="City" floatingLabelText="City"
            name="organization.city" data-type="string"/>
          <br/>
          <TextField className="account-org-state-text" hintText="State" floatingLabelText="State"
            name="organization.state" data-type="string"/>
          <br/>
          <TextField className="account-org-country-text" hintText="Country" floatingLabelText="Country"
            name="organization.country" data-type="string"/>
        </Binder>
      </Paper>
    );
  }
}

export default OrgainizationInformation;