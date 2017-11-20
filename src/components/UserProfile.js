import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {

  render() {

    return (
      <div>
        <h1>Profile</h1>
        <h3>Welcome, {this.props.loggedInUser.name}!</h3>
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