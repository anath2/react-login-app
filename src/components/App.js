import React from 'react'
import { Route } from 'react-router'

import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'
import Header from './Header';

const App = () => { 

  return (
  <div className="wrapper">
    <Header />
    <Route path="/login" component={LoginContainer} />
    <Route path="/register" component={RegisterContainer} />
  </div>
)};

// TODO Use map state to props to display whatever needs to be displayed here

export default App;
