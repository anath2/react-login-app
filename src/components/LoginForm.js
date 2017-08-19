import React from 'react'
import Proptypes from 'prop-types'

const LoginForm = ({ error, onSubmit }) => { return (
  <div className="wrapper">
    <h3 className="heading"> Account login </h3>
    { error === "AUTH_ERROR" && 
      <div className="error"> Authentication error </div>
    }
    <form onSubmit={ onSubmit } >
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
LoginForm.propTypes = {
  error: Proptypes.string.isRequired,
  onSubmit: Proptypes.func.isRequired
}

export default LoginForm