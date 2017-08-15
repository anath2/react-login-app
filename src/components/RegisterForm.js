import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { func, object } from 'prop-types'

export default class RegisterForm extends Component {
  static PropTypes = {
    registerError: object.isRequired,
    onSubmit: func.isRequired
  }

  state = {
    email: "",
    username: "",
    password1: "",
    password2: "",
    registrationSuccessful: false
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClick = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props
    onSubmit(this.state.email, this.state.username, this.state.password1, this.state.password2);
  }

  componentWillReceiveProps(nextProps) {
    const {
      registerError
    } = nextProps
    if (Object.keys(registerError).length === 0) {
      this.setState({ registrationSuccessful: true })
    }
  }

  render = () => {
    const { registrationSuccessful } = this.state;
    const { registerError } = this.props

    return (
      <div className="wrapper">
        {
          registrationSuccessful ?
            <div>
              <p> Thank you for registering </p>
              <Link to="/login" className="link"> Click to login </Link>
            </div>
            :
            <div>
              <h3 className="heading"> create an account </h3>
              {
                Object.keys(registerError).length > 0 &&
                <div className="error"> Registration error </div>
              }
              <form className="form RegisterForm">
                <input
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  className="text"
                  placeholder="Email"
                  type="email" />
                <input className="text"
                  placeholder="Username"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChange}
                  name="username"
                />
                <input className="text"
                  placeholder="Password"
                  type="password"
                  name="password1"
                  value={this.state.password1}
                  onChange={this.onChange}
                />
                <input
                  className="text"
                  placeholder="Re-enter password"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChange}
                  type="password"
                />
                <button className="button" onClick={this.onClick}> Register </button>
              </form>
              <hr className="hr" />
              <Link className="link" to="/login">Already a member? Click to login </Link>
            </div>
        }
      </div>
    )
  }
}
