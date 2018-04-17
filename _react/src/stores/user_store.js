import Store from "./store";
import JToker from 'j-toker';
import User from "../models/user_model";

class UserStore extends Store{
  state = {
    user: new User()
  }
}

export default UserStore;