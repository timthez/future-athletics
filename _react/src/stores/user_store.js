import Store from "./store";
import JToker from 'j-toker';

class UserStore extends Store{
  state = {
    user:{
      username: ""
    }
  }
}

export default UserStore;