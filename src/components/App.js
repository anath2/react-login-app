import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import { Auth } from '../utilities/authentication'
import Header from './Header';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ResetPassword from './ResetPassword';
import Dashboard from './Dashboard';

export default class App extends Component {

  // Find a method to check if the state is not loggedIn 
  // Redirect to login page

  // Pass the authentication function as prop to login component.   

  state = {
    authenticationError: false,
    registerError: {}
  }

  register = (email, username, password1, password2) => {
    // Reset the error object
    this.setState({ registerError: {} })

    if (email === "") {
      this.setState((prevState) => (
        {
          registerError: Object.assign({}, prevState.registerError, { "email": "empty" })
        }
      ))
    }

    if (username === "") {
      this.setState((prevState) => (
        {
          registerError: Object.assign({}, prevState.registerError, { "username": "empty" })
        }
      ))
    }

    if (password1 === "") {
      this.setState((prevState) => (
        {
          registerError: Object.assign({}, prevState.registerError, { "password": "empty" })
        }
      ))
    }

    if (Auth['emails'].indexOf(email) !== -1) {
      this.setState((prevState) => (
        {
          registerError: Object.assign({}, prevState.registerError, { "email": "taken" })
        }
      ))
    }

    if (Auth['users'].indexOf(username) !== -1) {
      this.setState((prevState) => (
        {
          registerError: Object.assign({}, prevState.registerError, { "username": "taken" })
        }
      ))
    }

    if (password1 !== password2) {
      this.setState((prevState) => (
        {
          registerError: Object.assign({}, prevState.registerError, { "password": "mismatch" })
        }
      ))
    }
  }

  authenticate = (username, password) => {
    // Call the authentication function
    if (Auth['users'].indexOf(username) !== -1 && Auth['password'].indexOf(password) !== -1) {
      this.setState({ authenticationError: false })
    } else {
      this.setState({ authenticationError: true })
    }
  }

  signOut = (e) => {
    e.preventDefault()
  }

  render() {

    return (
      <div className="wrapper">
        <Header />
        {
          !this.state.isAuthenticated ?
            <Redirect from="/" to="/login" />
            :
            <Redirect from="/" to="/dashboard" />
        }

        <Switch>
          <Route exact path="/login" render={({ history }) => <LoginForm onSubmit={this.authenticate} history={history} authenticationError={this.state.authenticationError} />} />
          <Route path="/dashboard" render={({ history }) => <Dashboard onSubmit={this.signOut} history={history} />} />
          <Route path="/register" render={({ history }) => <RegisterForm onSubmit={this.register} history={history} registerError={this.state.registerError} />} />
          <Route path="/reset" component={ResetPassword} />
        </Switch>
      </div>
    )
  }
}

