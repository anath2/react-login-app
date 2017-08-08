import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { func, object } from 'prop-types'

export default class LoginForm extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    history: object.isRequired
  }
  
  onClick = (e) => {
    const {
      history,
      onSubmit
    } = this.props
    onSubmit(e);
    history.push('/dashboard')
  }
  
  render() { return(
    <div className="wrapper"> 
      <h3 className="heading"> httpeace account login </h3>
      <form className="form loginForm"> 
        <input className="text" placeholder="Username or email" type="text"  />
        <input className="text" placeholder="Password" type="password" />
        <button className="button" onClick={this.onClick}> Login </button> 
      </form>
      <hr className="hr" />
      <Link className= "link" to="/register"> New at httpeace? Click to register </Link>
      <Link className= "link" to="/reset"> Forgot username or password? </Link>
    </div> 
  )}
}