import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
class Thanks extends Component {
  deleteItem = () =>{
      console.log('in delete item')
      console.log(this.props.item.id)
      Axios.delete(`/api/feedback/${this.props.item.id}`)
      .then((response) =>{
          console.log('DELETE RESPONSE:', response)
      }).catch((error) =>{
          console.log('DELETE ERROR:', error)
      })
      this.props.getFeedback();
  }
  render() {
    return (
      <>
        <td>{this.props.item.feeling}</td>
        <td>{this.props.item.understanding}</td>
        <td>{this.props.item.support}</td>
        <td>{this.props.item.comments}</td>
        <td><button onClick = {() => this.deleteItem()}>Delete</button></td>
      </>
    );
  }
}
const customerReduxState = (reduxState) => ({
  reduxState
})
export default connect(customerReduxState)(Thanks);