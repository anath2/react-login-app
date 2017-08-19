import React from 'react';

//import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import Header from './Header';

const App = () => { return (
  <div className="wrapper">
    <Header />
    <RegisterContainer />
  </div>
)};

export default App;
