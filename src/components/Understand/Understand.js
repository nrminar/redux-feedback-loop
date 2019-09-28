import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
class Understand extends Component {
  state={
    understand: []
  }
  nextButton = () =>{
    this.props.dispatch({type: 'ADD_UNDERSTAND', payload: this.state.understand})
    this.props.history.push('/support')
  }
  handleChange = (event) =>{
    console.log('hi from change:', event.target.value)
    this.setState({understand: event.target.value})
  }
  render() {
    return (
        <div>
            <h1>How are you well are you understanding the content?</h1>
            <label><input onChange={(event) => {this.handleChange(event, 'type')}} type="radio" name='type' value="1"></input>1</label>
            <label><input onChange={(event) => {this.handleChange(event, 'type')}} type="radio" name="type" value="2"></input>2</label>
            <label><input onChange={(event) => {this.handleChange(event, 'type')}} type="radio" name="type" value="3"></input>3</label>
            <label><input onChange={(event) => {this.handleChange(event, 'type')}} type="radio" name="type" value="4"></input>4</label>
            <label><input onChange={(event) => {this.handleChange(event, 'type')}} type="radio" name="type" value="5"></input>5</label>
            <button onClick = {this.nextButton}>Next</button>
        </div>
    );
  }
}
const customerReduxState = (reduxState) => ({
  reduxState
})
export default connect(customerReduxState)(Understand);