import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
class Comment extends Component {
  state={
    comment: '',
  }
  nextButton = () =>{
    this.props.dispatch({type: 'ADD_COMMENT', payload: this.state.comment})
    this.props.history.push('/review')
  }
  handleChange = (event) =>{
    console.log('hi from change:', event.target.value)
    this.setState({comment: event.target.value})
  }
  render() {
    return (
      <div>
        <h1>Leave a Comment!!</h1>
        <input onChange={(event) => {this.handleChange(event)}} placeholder="Comment"></input>
        <button onClick = {this.nextButton}>Next</button>
      </div>
    );
  }
}
const customerReduxState = (reduxState) => ({
  reduxState
})
export default connect(customerReduxState)(Comment);