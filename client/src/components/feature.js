import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { Link } from 'react-router';

class Feature extends Component {

  componentWillMount(){
    this.props.fetchMessage();
  }

  render(){
    return (
      <div>This is the feature page</div>
    );
  }
}

export default connect(null, actions)(Feature);
