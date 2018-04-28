import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {SelectField} from 'material-ui';
class Binder extends Component {
  componentDidMount() {
    this.props.store.subscribe(this._onChange);
  }

  componentWillUnmount() {
    this.props.store.unsubscribeAll();
  }

  _onChange = () => {
    this.setState(this.props.store.state)
  }

  renderChild(c){
    if (!c.props.hasOwnProperty("name")) {
      return {};
    }
    if(!c.props.hasOwnProperty("data-type")){
      console.error("No data-type attribute defined for element:", c)
      return {};
    }
    const props = {
      value: this.props.store.getValueFromFieldPath(c.props.name, c.props["data-type"])
    };

    if(!c.props.hasOwnProperty("onChange")){
      if (c.type === SelectField) {
        props.onChange = this.props.store.updateFieldFromSelect.bind(this.props.store, c.props.name, c.props["data-type"]);
      } else {
        props.onChange = this.props.store.updateFieldFromInput;
      }
    }

    let error = this.props.store.getErrors(c.props.name);
    if(error){
      props.errorText = this.formatError(error);
    }

    return props;
  }

  // We may want to improve this in the future
  formatError(error){
    if(Array.isArray(error)){
      return error.join(", ");
    }
    return error;
  }

  processChildren (element){
    if (React.Children.count(element.props.children) === 0) {
      return []
    }
    else {
      return React.Children.map(element.props.children, (child) => {
        if (child.props === undefined) {
          return child
        }
        else if (React.Children.count(child.props.children) === 0) {
          return React.cloneElement(child, this.renderChild(child))
        }
        else {
          return React.cloneElement(child, this.renderChild(child), this.processChildren(child))
        }
      })
    }
}

  render() {
    return this.processChildren(this);
  }
}

export default Binder;
