import Store from "./store";
import JToker from 'j-toker';
import Organization from "../models/organization_model";

class OrganizationStore extends Store{
  state = {
      organization: new Organization({
      type: "UNIVERSITY",
      address_1: "test"
    })
  }
}

export default OrganizationStore;