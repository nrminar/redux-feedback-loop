import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
class Home extends Component {
  state={
    orders: []
  }
  nextButton = () =>{
    this.props.history.push('/feeling')
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Leave us some feedback, let us know how its going!!</p>
        <button onClick = {this.nextButton}>Start</button>
      </div>
    );
  }
}
const customerReduxState = (reduxState) => ({
  reduxState
})
export default connect(customerReduxState)(Home);