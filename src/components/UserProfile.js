import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {

  render() {

    return (
      <div className="ProfileContainer">
        <h1>Profile</h1>
        <h3>Welcome, {this.props.loggedInUser.name}!</h3>
          <img src={this.props.loggedInUser.img}></img>
          <p>Email: {this.props.loggedInUser.email}</p>
          <p>Phone Number: {this.props.loggedInUser.phone}</p>
          <p>Location: {this.props.loggedInUser.location}</p>
        <a>EditProfile</a>
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