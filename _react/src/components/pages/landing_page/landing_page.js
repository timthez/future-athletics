import React, { Component } from 'react';
import {AppBar} from 'material-ui';
// import logo from '../assets/images/panda.svg';
// import './Routes.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <AppBar title="Future Athletics"/>
      </div>
    );
  }
}

export default LandingPage;
