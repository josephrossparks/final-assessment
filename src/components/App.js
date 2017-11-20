import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogInForm from './LogInForm';
import UserProfile from './UserProfile';

class App extends Component {
  render() {

  	if (this.props.loggedInUser === null) {
  		return (
     		<div className="App">
      			<LogInForm />
      		</div>
    	);
  	} else {
  		return (
  			<div>
  				<UserProfile />
  			</div>
  		)
  	}
  }
};

function mapStateToProps(state) {
    return {
        loggedInUser: state.loggedInUser
    }
}

export default connect(mapStateToProps, null)(App);
