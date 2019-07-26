import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from './components/createUser.js';
import ViewUsers from './components/viewUsers.js';

class App extends React.Component {

  render(){
    return(
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <CreateUser title="Create User"/>
          </div>
          <div className="flex-large">
            <ViewUsers/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
