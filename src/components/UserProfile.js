import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {

  render() {

    return (
      <div className="ProfileContainer">
        <h1>Profile</h1>
        <h3>Welcome, {this.props.loggedInUser.name}!</h3>
          <div className="profile">
            <img src={this.props.loggedInUser.img} height="120px" width="200px" ></img>
            <div className="profileText">
              <ul>
                <li>Email: {this.props.loggedInUser.email}</li>
                <li>Phone Number: {this.props.loggedInUser.phone}</li>
                <li>Location: {this.props.loggedInUser.location}</li>
              </ul>
            </div>
          </div>
        <a>Edit Profile</a>
      </div>
    );

  }

}

function mapStateToProps(state) {
    return {
        loggedInUser: state.loggedInUser
    }
}

export default connect(mapStateToProps, null)(UserProfile);