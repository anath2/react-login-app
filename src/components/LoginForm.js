import React from 'react'
import PropTypes from 'prop-types'

import Link from '../containers/Link'

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
    <Link target="register"> New at httpeace? Click to register </Link>
  </div>
)}

LoginForm.propTypes = {
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm