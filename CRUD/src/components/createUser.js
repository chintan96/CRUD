import React from 'react';
import { connect } from "react-redux";

class CreateUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      gender: "",
      hobby_1: false,
      hobby_2: false,
      hobby_3: false,
      country: "",
      update: false
    };
//    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {email,password,confirm_password} = this.state;
    if (!email||password!==confirm_password){
      alert('Form Error');
      return false;
    }
    e.target.reset();
    //const email = this.state.email;
    //const password = this.state.password;
    const gender = this.state.gender;
    const country = this.state.country;
    const hobby_1 = this.state.hobby_1;
    const hobby_2 = this.state.hobby_2;
    const hobby_3 = this.state.hobby_3;
    const update = this.state.update;
    const data = {
      email,
      password,
      gender,
      country,
      hobby_1,
      hobby_2,
      hobby_3,
      update
    }
    this.props.dispatch({
      type:'ADD_USER',
      data});
  }

  render(){
    return(
      <div className="form-check">

        <form onSubmit={this.onSubmit}>
          <label>Email:
            <input type="text" name="email" onChange={(e) => this.setState({email: e.target.value})} placeholder='Email'/>
          </label>
          <label>Password:
            <input type='password' name='password' onChange={(e) => this.setState({password: e.target.value})} placeholder='Password'/>
          </label>
          <label>Confirm Password:
            <input type='password' name='confirm_password' onChange={(e) => this.setState({confirm_password: e.target.value})} placeholder='Confirm Password'/>
          </label>
          <label>Gender:
            <label>Male
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => this.setState({gender: e.target.value})}
              />
            </label>
            <label>Female
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => this.setState({gender: e.target.value})}
              />
            </label>
            <label>Others
              <input
                type="radio"
                name="gender"
                value="Others"
                onChange={(e) => this.setState({gender: e.target.value})}
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
              />
            </label>
            <label>Hobby 2
              <input
                type="checkbox"
                name="hobby_2"
                onChange={() => this.setState({hobby_2: !this.state.hobby_2})}
              />
            </label>
            <label>Hobby 3
              <input
                type="checkbox"
                name="hobby_3"
                onChange={() => this.setState({hobby_3: !this.state.hobby_3})}
              />
            </label>
          </label>
          <label>Country:
            <select onChange={(e) => this.setState({country: e.target.value})}>
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

export default connect()(CreateUser);
