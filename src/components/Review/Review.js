import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
class Review extends Component {
  nextButton = () =>{
    Axios.post('/api/feedback', this.props.reduxState.feedbackReducer)
    .then((response) =>{
        console.log("POST RESPONSE:", response)
    }).catch((error) =>{
        console.log('POST ERROR:', error)
    })
    this.props.history.push('/thanks')
  }
  render() {
    return (
      <div>
        <h1>Review</h1>
        <h3>This is what you have told us:</h3>
        <li>Feelings: {this.props.reduxState.feedbackReducer.feeling}</li>
        <li>Understanding: {this.props.reduxState.feedbackReducer.understand}</li>
        <li>Support: {this.props.reduxState.feedbackReducer.support}</li>
        <li>Comments: {this.props.reduxState.feedbackReducer.comment}</li>
        <button onClick = {this.nextButton}>Submit Feedback</button>
      </div>
    );
  }
}
const customerReduxState = (reduxState) => ({
  reduxState
})
export default connect(customerReduxState)(Review);