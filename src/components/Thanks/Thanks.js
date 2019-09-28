import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
class Thanks extends Component {
  state={
    orders: []
  }
  render() {
    return (
      <div>
        <h1>Thanks for the Feedback!!</h1>
      </div>
    );
  }
}
const customerReduxState = (reduxState) => ({
  reduxState
})
export default connect(customerReduxState)(Thanks);