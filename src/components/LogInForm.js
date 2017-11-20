import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {

    return (
      <div className="LogInForm">
        <h1>Sign In</h1>
        <form onSubmit={ this.handleSubmit}>
          <input placeholder="Username" type="text" onChange={this.handleUsernameChange}></input>
          <input placeholder="Password" type="password" onChange={this.handlePasswordChange}></input>
          <button type="submit">Log In</button>
          <a>Forgot your password?</a>
        </form>
      </div>
    );

  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.login(this.state.username, this.state.password);

    this.setState({
      username:"",
      password:""
    })
   
  };

}

const mapActionsToProps = { login }

export default connect(null, mapActionsToProps)(LogInForm);