import React from 'react';
import { connect } from "react-redux";
import { Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';

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
      country: "Country",
      update: false
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {email,password,confirm_password,gender,country,hobby_1,hobby_2,hobby_3} = this.state;
    if (!email||password!==confirm_password||!gender||country==="Country"||(!hobby_1&&!hobby_2&&!hobby_3)){
      alert('Form Error');
      return false;
      e.stopPropagation();
    }
    e.target.reset();
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
      this.setState({
        email: "",
        password: "",
        confirm_password: "",
        gender: "",
        hobby_1: false,
        hobby_2: false,
        hobby_3: false,
        country: "Country",
      });
  }

  render(){
    return(
      <div>
        <Form onSubmit={this.onSubmit}>
        <fieldset><h2>Create User</h2>
        <fieldset>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={(e) => this.setState({email: e.target.value})} placeholder='Email'/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' onChange={(e) => this.setState({password: e.target.value})} placeholder='Password'/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='password' name='confirm_password' onChange={(e) => this.setState({confirm_password: e.target.value})} placeholder='Confirm Password'/>
          </Form.Group>
        </fieldset>
        <fieldset>
          <Form.Group as={Form.Col}>
            <Form.Label as="legend" column sm={10}>
              Gender
            </Form.Label>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="Male"
                onChange={(e) => this.setState({gender: e.target.value})}
                defaultChecked={false}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="Female"
                onChange={(e) => this.setState({gender: e.target.value})}
                defaultChecked={false}
              />
              <Form.Check
                type="radio"
                label="Others"
                name="gender"
                value="Others"
                onChange={(e) => this.setState({gender: e.target.value})}
                defaultChecked={false}
              />
          </Form.Group>
        </fieldset>
        <fieldset>
          <Form.Label>Hobbies</Form.Label>
            {['checkbox'].map(type => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Reading" type={type} id={`inline-${type}-1`} onChange={() => this.setState({hobby_1: !this.state.hobby_1})} defaultChecked={false}/>
                <Form.Check inline label="Travelling" type={type} id={`inline-${type}-2`} onChange={() => this.setState({hobby_2: !this.state.hobby_2})} defaultChecked={false}/>
                <Form.Check inline label="Running" type={type} id={`inline-${type}-3`} onChange={() => this.setState({hobby_3: !this.state.hobby_3})} defaultChecked={false}/>
              </div>
            ))}
        </fieldset>
        <fieldset>
          <Dropdown>
          <DropdownButton title={this.state.country} onClick={(e) => this.setState({country: e.target.textContent})}>
            <Dropdown.Item>India</Dropdown.Item>
            <Dropdown.Item>USA</Dropdown.Item>
            <Dropdown.Item>UK</Dropdown.Item>
            <Dropdown.Item>Canada</Dropdown.Item>
          </DropdownButton>
          </Dropdown>
        </fieldset>
          <Button type="submit" onSubmit={this.onSubmit}>Create</Button>
        </fieldset>
        </Form>
      </div>
    );
  }

}

export default connect()(CreateUser);
