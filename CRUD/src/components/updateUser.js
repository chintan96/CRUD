import React from 'react';
import { connect } from "react-redux";
import { Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';

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
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {password,confirm_password,gender,country,hobby_1,hobby_2,hobby_3} = this.state;
    if (password!==confirm_password||!gender||country==="Country"||(!hobby_1&&!hobby_2&&!hobby_3)){
      alert('Form Error');
      return false;
      e.stopPropagation();
    }
    e.target.reset();
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
      this.setState({
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
        <fieldset><h2>Update User</h2>
          <Form.Group as={Form.Col} controlId="formPlaintextEmail">
            <Form.Label as="legend" column sm={10}>
              Email
            </Form.Label>
              <Form.Control plaintext readOnly defaultValue={this.props.user.email} />
          </Form.Group>
          <fieldset>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' onChange={(e) => this.setState({password: e.target.value})} placeholder='Password' defaultValue={this.props.user.password}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='password' name='confirm_password' onChange={(e) => this.setState({confirm_password: e.target.value})} placeholder='Confirm Password' defaultValue={this.props.user.confirm_password}/>
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
                id="formHorizontalRadios1"
                onChange={(e) => this.setState({gender: e.target.value})}
                defaultChecked={this.props.user.gender==="Male"?true:false}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="Female"
                id="formHorizontalRadios2"
                onChange={(e) => this.setState({gender: e.target.value})}
                defaultChecked={this.props.user.gender==="Female"?true:false}
              />
              <Form.Check
                type="radio"
                label="Others"
                name="gender"
                value="Others"
                id="formHorizontalRadios3"
                onChange={(e) => this.setState({gender: e.target.value})}
                defaultChecked={this.props.user.gender==="Others"?true:false}
              />
          </Form.Group>
          </fieldset>
          <fieldset>
          <Form.Label>Hobbies</Form.Label>
            {['checkbox'].map(type => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Reading" type={type} id={`inline-${type}-1`} onChange={() => this.setState({hobby_1: !this.state.hobby_1})} defaultChecked={this.props.user.hobby_1?true:false}/>
                <Form.Check inline label="Travelling" type={type} id={`inline-${type}-2`} onChange={() => this.setState({hobby_2: !this.state.hobby_2})} defaultChecked={this.props.user.hobby_2?true:false}/>
                <Form.Check inline label="Running" type={type} id={`inline-${type}-3`} onChange={() => this.setState({hobby_3: !this.state.hobby_3})} defaultChecked={this.props.user.hobby_3?true:false}/>
              </div>
            ))}
          </fieldset>
          <fieldset>
          <Dropdown>
          <DropdownButton title={this.props.user.country} onClick={(e) => this.setState({country: e.target.textContent})}>
            <Dropdown.Item>India</Dropdown.Item>
            <Dropdown.Item>USA</Dropdown.Item>
            <Dropdown.Item>UK</Dropdown.Item>
            <Dropdown.Item>Canada</Dropdown.Item>
          </DropdownButton>
          </Dropdown>
          </fieldset>
            <Button type="submit" onSubmit={this.onSubmit}>Update</Button>
          </fieldset>
        </Form>
      </div>
    );
  }

}

export default connect()(UpdateUser);
