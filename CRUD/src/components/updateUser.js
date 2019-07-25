import React from 'react';
import { connect } from "react-redux";
//import {addUser} from '../actions/actions.js';

class UpdateUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      password: this.props.user.password,
      confirm_password: "",
      gender: this.props.user.gender,
      hobby_1: this.props.user.hobby_1,
      hobby_2: this.props.user.hobby_2,
      hobby_3: this.props.user.hobby_3,
      country: this.props.user.country,
    };
//    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {password,confirm_password} = this.state;
    if (password!==confirm_password){
      alert('Form Error');
      return false;
    }
    e.target.reset();
    //const password = this.state.password;
    const gender = this.state.gender;
    const country = this.state.country;
    const hobby_1 = this.state.hobby_1;
    const hobby_2 = this.state.hobby_2;
    const hobby_3 = this.state.hobby_3;
    const data = {
      password,
      gender,
      country,
      hobby_1,
      hobby_2,
      hobby_3
    }
    this.props.dispatch({
      type: 'UPDATE',
      id: this.props.user.email,
      data: data});
  }

  render(){
    return(
      <div className="form-check">
        <h5>{this.props.user.email}</h5>
        <form onSubmit={this.onSubmit}>
          <label>Password:
            <input type='password' name='password' onChange={(e) => this.setState({password: e.target.value})} placeholder='Password' defaultValue={this.props.user.password}/>
          </label>
          <label>Confirm Password:
            <input type='password' name='confirm_password' onChange={(e) => this.setState({confirm_password: e.target.value})} placeholder='Confirm Password' defaultValue={this.props.user.confirm_password}/>
          </label>
          <label>Gender:
            <label>Male
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => this.setState({gender: e.target.value})}
                defaultChecked={this.props.user.gender==="Male"?true:false}
              />
            </label>
            <label>Female
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => this.setState({gender: e.target.value})}
                defaultChecked={this.props.user.gender==="Female"?true:false}
              />
            </label>
            <label>Others
              <input
                type="radio"
                name="gender"
                value="Others"
                onChange={(e) => this.setState({gender: e.target.value})}
                defaultChecked={this.props.user.gender==="Others"?true:false}
              />
            </label>
          </label>
          <label>
            Hobbies:
            <label>Hobby 1
              <input
                type="checkbox"
                name="hobby_1"
                onChange={() => this.setState({hobby_1: !this.state.hobby_1})}
                defaultChecked={this.props.user.hobby_1?true:false}
              />
            </label>
            <label>Hobby 2
              <input
                type="checkbox"
                name="hobby_2"
                onChange={() => this.setState({hobby_2: !this.state.hobby_2})}
                defaultChecked={this.props.user.hobby_2?true:false}
              />
            </label>
            <label>Hobby 3
              <input
                type="checkbox"
                name="hobby_3"
                onChange={() => this.setState({hobby_3: !this.state.hobby_3})}
                defaultChecked={this.props.user.hobby_3?true:false}
              />
            </label>
          </label>
          <label>Country:
            <select onChange={(e) => this.setState({country: e.target.value})} defaultValue={this.props.user.country}>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
            </select>
          </label>
          <input type="submit" onSubmit={this.onSubmit}/>
        </form>
      </div>
    );
  }

}

export default connect()(UpdateUser);
