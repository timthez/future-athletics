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

    this.setState(this._setValuefromFieldPath(this.state, name, value));
  }

  updateFieldFromSelect = (name, type, event, index, value) => {
    switch (type) {
      case "number":
        value = +value; break;
      case "int":
        value = Math.trunc(+value); break;
      case "string":
        value = value; break;
      default:
        throw new Error(`No data-type defined for ${name}`);
    }
    this.setState(this._setValuefromFieldPath(this.state, name, value));
  }

  setState = (obj) => {
    Object.assign(this.state, obj)
    this.emitChange();
  }

  getField = (field) => {
    return this.state[field];
  }

  _setValuefromFieldPath(prevObj,fieldPath, value){
    let obj = Object.assign({}, prevObj);
    var ref = obj;
    fieldPath.split('.').forEach((n, i, arr) => {
      if (i === arr.length - 1) {
        ref[n] = value
      } else {
        ref = ref[n];
      }
    })
    return obj
  }

}

export default Store;
