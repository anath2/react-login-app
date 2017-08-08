import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './Header';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ResetPassword from './ResetPassword';
import Dashboard from './Dashboard';

export default class App extends Component {  
  
  // Find a method to check if the state is not loggedIn 
    // Redirect to login page

  // Pass the authentication function as prop to login component.   
  
  state = {isAuthenticated: false}

  

  authenticate = (e) => {
    e.preventDefault();
    // Call the authentication function
    //alert("I am here")
    this.setState({isAuthenticated: true})
  }
  
  signOut = (e) => {
    e.preventDefault()
    // Call the close session and redirect function
    this.setState({isAuthenticated: false})

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
        {
          
        }
        <Switch>
          <Route exact path="/login" render={({ history }) => <LoginForm onSubmit={this.authenticate} history={history} />}/>  
          <Route path="/dashboard" render={({ history }) => <Dashboard onSubmit={this.signOut} history={history} />} />                    
          <Route path="/register" component={RegisterForm} />
          <Route path="/reset" component={ResetPassword} />
        </Switch>
      </div>
    )
  }
}

