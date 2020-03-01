import React, { Component } from "react";
import PropTypes from "prop-types"

class Catch extends Component {
  state = {
    error: false
  };
  static propTypes = {
    children: PropTypes.node
  };
  
  componentDidCatch(error, erroInfo) {
    this.setState({
      error 
    });
  }

  render() {
    return this.state.error ? "ops we have some error" : this.props.children;
  }
}

export default Catch;
