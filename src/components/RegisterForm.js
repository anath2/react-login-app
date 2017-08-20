import React from 'react'
import PropTypes from 'prop-types'

import TextField from './TextField'
import Link from '../containers/Link'

const RegisterForm = ({ errors, onSubmit }) => { 
  
  return (
    <div className="wrapper">
      <h3 className="heading"> Create an account </h3>        
      <form className="form RegisterForm" onSubmit={ onSubmit} >
        
        <TextField 
          type="email"
          name="email"
          placeholder="email addres"
          error={errors.email}
        />
        <TextField 
          type="text"
          name="username"
          placeholder="username"
          error={errors.username}
        />
        <TextField 
          type="password"
          name="password1"
          placeholder="password"
          error={errors.password1}
        />
        <TextField 
          type="password"
          name="password2"
          placeholder="retype password"
          error={errors.password2}
        />
        <button className="button" type="submit"> Register </button>
      </form>
      <hr className="hr" />
      <Link target="login"> Already a member? Login </Link>
    </div>
  )
} 

// TODO : declare proptypes for the error object

RegisterForm.propTypes = {
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default RegisterForm
