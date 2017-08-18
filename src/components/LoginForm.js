import React from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../actions'

const LoginForm = ({ error, onSubmit }) => { return (
  <div className="wrapper">
    <h3 className="heading"> Account login </h3>
    <form onSubmit="onSubmit" >
      <input 
        className="text"
        placeholder="Username or email"
        type="text" />
      <input 
        className="text"
        placeholder="password"
        type="password" />
        
      <button className="button" type="submit"> Login </button>
    </form>
    <hr className="hr" />
    <a className="link" href="/register"> New at httpeace? Click to register </a>
    <a className="link" href="/reset"> Forgot username or password? </a>
  </div>
)}

// TODO: Proptypes declarations

export default LoginForm