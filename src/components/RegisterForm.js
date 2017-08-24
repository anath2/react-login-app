import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Styling inputs
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


const paperStyle = {    
  maxWidth: 400,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: "0 auto",
  padding: 20,
  textAlign: 'center',
  display: 'block',
  
}

const headingStyle = {
transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
textTransform: 'uppercase',
letterSpacing: '1px',
fontWeight: 'normal',
margin: -20,
padding: 20,
color: 'white',
backgroundColor: 'rgb(0, 188, 212)',  
marginBottom: 20,
textAlign: 'left',
fontSize: 14
}

const textStyle = {
  textAlign: "left"
}

const buttonStyle = {  
margin: "40px auto",
height: 40,
width: '100%',
//maxWidth: 250
}

const linkStyle = {
color: "#b2b2b2",
fontSize: 12,
textDecoration: "none",
display: "block"
}

const errorMessage = {
  TAKEN: "is already taken",
  EMPTY: "is required",
  INVALID: "is not valid"
}


const RegisterForm = ({ errors, onSubmit }) => { 
  
  return (
    <Paper style={paperStyle}>
      <div style={headingStyle}> Register </div>              
      <form className="form RegisterForm" onSubmit={ onSubmit} >
        
        <TextField 
          style={textStyle}
          type="email"
          name="email"
          floatingLabelFixed={true}
          floatingLabelText="email"
          fullWidth={true}
          errorText={errors.email !== undefined && "Email " + errorMessage[errors.email]}
        />
        <TextField 
          style={textStyle}
          type="username"
          name="username"
          floatingLabelFixed={true}
          floatingLabelText="username"
          fullWidth={true}
          errorText={errors.username !== undefined &&  "Username " + errorMessage[errors.username]}
        />
        <TextField 
          style={textStyle}
          type="password"
          name="password1"
          floatingLabelFixed={true}
          floatingLabelText="password"
          fullWidth={true}
          errorText={errors.password1 !== undefined && "Password " + errorMessage[errors.password1]}
        />
        <TextField 
          style={textStyle}
          type="password"
          name="password2"
          floatingLabelFixed={true}
          floatingLabelText="retype password"
          fullWidth={true}
          errorText={errors.password2 !== undefined && "Field " + errorMessage[errors.password2]}
        />
        <RaisedButton 
          label="Register"
          secondary={true} 
          style={buttonStyle} 
          type="submit" 
        />  
      </form>
      <Link style={linkStyle} to="/login"> Already a member? Login </Link>
    </Paper>
  )
} 

// TODO : declare proptypes for the error object
// TODO : Clean up the code

RegisterForm.propTypes = {
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default RegisterForm
