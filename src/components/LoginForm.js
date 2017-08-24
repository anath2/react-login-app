import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Styling inputs
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'

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

// const textStyles={
  
// }

// const titleStyle = {
//   backgroundColor: "#000"
// }

const LoginForm = ({ error, onSubmit }) => { return (
  <Paper style={paperStyle}>
    {
      error ? 
       <div style={{ ...headingStyle, backgroundColor: 'red' }}> Incorrect username or password </div>
       : <div style={headingStyle}> Login </div>
    }
    
    <form onSubmit={ onSubmit } >
      <TextField       
        name="username"
        type="text"
        floatingLabelFixed={true}
        floatingLabelText="username"
        fullWidth={true}
      />
      <TextField         
        name="password"
        type="password"
        floatingLabelFixed={true}
        floatingLabelText="password"
        fullWidth={true}
      />
      <RaisedButton 
        label="Login"
        type="submit" 
        secondary={true}         
        style={buttonStyle} 
      />
    </form>
    <Link style={linkStyle} to="/register"> Not a member? Click to register </Link>
  </Paper>
)}

LoginForm.propTypes = {
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm