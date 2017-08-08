import React from 'react'
import { Link } from 'react-router-dom'

function RegisterForm() { return(
  <div className="wrapper"> 
    <h3 className="heading"> create an account </h3>
    <form className="form RegisterForm"> 
      <input className="text" placeholder="Email" type="email" />
      <input className="text" placeholder="Username" type="text" />
      <input className="text" placeholder="Password" type="password" />
      <input className="text" placeholder="Re-enter password" type="password" />
      <button className="button"> Register </button>
    </form>
    <hr className="hr" />
    <Link className="link" to="/login">Already a member? Click to login </Link> 
  </div> 
)}

export default RegisterForm