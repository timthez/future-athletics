import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Layout extends Component {
  render() {
    return (
      <div className="App">
        <h1>FUTURE</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
