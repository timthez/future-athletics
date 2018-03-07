import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Validator extends Component {
  render() {
    console.log(this.props.children);
    return this.props.children.map(c=>{
      return React.cloneElement(c,{value: "t"});
    });
  }
}

export default Validator;
