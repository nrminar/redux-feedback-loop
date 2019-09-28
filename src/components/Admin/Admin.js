import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

class Home extends Component {
  state={
      feedback: []
  }
  componentDidMount = () =>{
      this.getFeedback();
  }
  getFeedback = () =>{
      Axios.get('/api/feedback')
      .then((response) =>{
          this.setState({feedback: response.data})
      }).catch((error) =>{
          console.log('GET ERROR:', error)
      })
      console.log('All the feedback:', this.state.feedback)
  }
  homeButton = () =>{
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <table className = "adminTable">
            <thead>
                <th>Feeling</th>
                <th>Understanding</th>
                <th>Support</th>
                <th>Comment</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {this.state.feedback.map((item) =>
                <tr>
                    <FeedbackItem item = {item} getFeedback = {this.getFeedback}/>
                </tr>
                )}
            </tbody>
        </table>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.homeButton}>Home</button>
      </div>
    );
  }
}
const customerReduxState = (reduxState) => ({
  reduxState
})
export default connect(customerReduxState)(Home);