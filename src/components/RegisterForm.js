import React from 'react'

import TextField from './TextField';

const RegisterForm = ({ error, onSubmit }) => { 
  
  return (
  <div className="wrapper">
    <h3 className="heading"> Create an account </h3>        
    <form className="form RegisterForm" onSubmit={onSubmit}>
      <TextField 
        type="email"
        name="email"
        placeholder="email addres"
      />
      <TextField 
        type="text"
        name="username"
        placeholder="username"
      />
      <TextField 
        type="password"
        name="password1"
        placeholder="password"
      />
      <TextField 
        type="password"
        name="password2"
        placeholder="retype password"
      />
      <button className="button" type="submit"> Register </button>
    </form>
    <hr className="hr" />
    <a className="link" href="/login"> Already a member? Click to login </a>
  </div>
)} 

// TODO : declare proptypes

export default RegisterForm
