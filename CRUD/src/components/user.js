import React, { Component } from 'react';
import {connect} from 'react-redux';


class User extends Component {
  render() {
  return (
    <div>
      <tr>{this.props.user.email}
      <td>
      <button onClick={()=>this.props.dispatch({type:'UPDATE_USER',id:this.props.user.email})}>Update</button>
      <button onClick={()=>this.props.dispatch({type:'DELETE_USER',id:this.props.user.email})}>Delete</button>
      </td>
      </tr>
    </div>
  );
 }
}
export default connect()(User);
