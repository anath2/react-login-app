import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'

import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'

const App = ({ authenticated }) => { 

  return (
  <div className="wrapper" >
    <AppBar title="LOGO" />
    {
      !authenticated && <Redirect to={{ 
        pathname: '/login'
      }} /> 
    }
    <Route path="/login" component={LoginContainer} />
    <Route path="/register" component={RegisterContainer} />
   
  </div>
)};

// TODO Use map state to props to display whatever needs to be displayed here

export default App;
