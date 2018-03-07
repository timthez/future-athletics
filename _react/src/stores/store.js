import EventEmitter from 'events';
const CHANGE = "change";

class Store extends EventEmitter{
  state = {};

  static instance(){
    if(!this._instance){
      this._instance = new this();
    }
    return this._instance;
  }

  subscribe = (func) => {
    this.addListener(CHANGE, func);
  }

  unsubscribeAll = () => {
    this.removeAllListeners(CHANGE);
  }

  emitChange = () => {
    this.emit(CHANGE);
  }

  emitValidationError = (error) => {
    // TODO
    this.emit("change", error);
  }

  emitError = (error) => {
    this.emit("change", error);
  }

  updateFieldFromInput = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    switch(target.dataset.type){
      case "number":
        value = +target.value; break;
      case "int":
        value = Math.trunc(+target.value); break;
      case "bool":
        value = target.checked; break;
      case "string":
        value = target.value; break;
      default:
        throw new Error(`No data-type defined for ${target.name}`);
    }

    let obj = Object.assign({}, this.state);
    var ref = obj;
    name.split('.').forEach((n, i, arr) => {
      if(i === arr.length - 1){
        ref[n] = value
      }else{
        ref = ref[n];
      }
    })

    this.setState(obj);
  }

  setState = (obj) => {
    Object.assign(this.state, obj)
    this.emitChange();
  }

  getField = (field) => {
    return this.state[field];
  }
}

export default Store;
