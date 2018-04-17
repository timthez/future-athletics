import React, { Component } from 'react';
import { Route as ReactRouterRoute, Redirect } from 'react-router';
import $ from 'jquery';
let initalLoad = true;
class Route extends Component{
  render(){
    if ($.auth.user.signedIn || this.props.public || initalLoad){
      initalLoad = false;
      return (<ReactRouterRoute {...this.props} />)
    }else{
      return (
        <Redirect to={{pathname: "/login", state: { from: this.props.location }}}/>
      )
    }
  }
}

export default Route;