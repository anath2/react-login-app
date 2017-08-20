import React from 'react'

import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'
import Header from './Header';

const App = ({ showContent }) => { 

  return (
  <div className="wrapper">
    <Header />
    {
      showContent === 'login' && <LoginContainer /> 
    }
    {
      showContent === 'register' && <RegisterContainer />
    }
  </div>
)};

// TODO Use map state to props to display whatever needs to be displayed here

export default App;
