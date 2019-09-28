import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
class Thanks extends Component {
  homeButton = () =>{
    this.props.history.push('/')
  }
  adminButton = () =>{
    this.props.history.push('/admin')
  }
  render() {
    return (
      <div>
        <h1>Thanks for the Feedback!!</h1>
        <button onClick = {this.homeButton}>Home</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>Pretend you can't see this! For developer ease of access</p>
        <button onClick = {this.adminButton}>Admin</button>
      </div>
    );
  }
}
const customerReduxState = (reduxState) => ({
  reduxState
})
export default connect(customerReduxState)(Thanks);