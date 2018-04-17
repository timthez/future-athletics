import $ from 'jquery';

class Model {
  constructor(obj){
    $.extend(true, this, obj);
  }

  // Get all attributes excluding functions
  attributes(){
    return Model.attributes(this);
  }

  // Recursively strips attributes from an object, removing functions
  static attributes(obj){
    var properties = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
        if (Array.isArray(obj[key])) {
          properties[key] = [];
          for (var i = 0; i < obj[key].length; i++) {
            properties[key].push(Model.attributes(obj[key][i]));
          }
        } else {
          if (typeof obj[key] === 'object' && obj[key] != null) {
            properties[key] = Model.attributes(obj[key]);
          } else {
            properties[key] = obj[key];
          }
        }
      }
    }
    return properties;
  }
}
export default Model;
