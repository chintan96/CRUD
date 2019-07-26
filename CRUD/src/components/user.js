import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Form, Table, ListGroup } from 'react-bootstrap';

class User extends Component {
  render() {
  return (
    <div>
    <Table striped bordered hover size="sm" variant="dark">
    <tbody>
    <tr>
      <td>{this.props.user.email}</td>
      <td><Button onClick={()=>this.props.dispatch({type:'UPDATE_USER',id:this.props.user.email})}>Update</Button></td>
      <td><Button onClick={()=>this.props.dispatch({type:'DELETE_USER',id:this.props.user.email})}>Delete</Button></td>
    </tr>
    </tbody>
    </Table>
    </div>
  );
 }
}
export default connect()(User);
