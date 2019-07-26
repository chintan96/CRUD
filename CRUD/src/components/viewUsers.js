import React from 'react';
import { connect } from 'react-redux';
import User from './user.js';
import UpdateUser from './updateUser.js';

class ViewUsers extends React.Component {
  render(){
    return(
      <div>
      <fieldset><h2>View Users</h2>
        {console.log(this.props.users)}
        {this.props.users.map((user) =>(
          <div key={user.email}>
            {user.update ? <UpdateUser user={user} key={user.email} /> :
              <User key={user.email} user={user} />}
          </div>
        ))}
      </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}

export default connect(mapStateToProps)(ViewUsers);
