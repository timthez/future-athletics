import React, { Component } from 'react';
import { Route as ReactRouterRoute, Redirect } from 'react-router';

class Route extends Component{
  render(){
    var authenticated = true;
    if(authenticated || this.props.public){
      return (<ReactRouterRoute {...this.props} />)
    }else{
      return (
        <Redirect to={{pathname: "/login", state: { from: this.props.location }}}/>
      )
    }
  }
}

export default Route;