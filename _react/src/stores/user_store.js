import Store from "./store";

class UserStore extends Store{
  state = {
    user:{
      username: ""
    }
  }
}

export default UserStore;