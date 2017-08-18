import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { func, object, bool } from 'prop-types'

export default class LoginForm extends Component {
  static propTypes = {
    authenticationError: bool.isRequired,
    onSubmit: func.isRequired,
    history: object.isRequired
  }

  state = {
    username: "",
    password: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClick = (e) => {
    const {
      history,
      onSubmit,
      authenticationError
    } = this.props
    e.preventDefault();
    onSubmit(e, this.state.username, this.state.password);
    if (!authenticationError) {
      this.setState({
        username: "",
        password: ""
      })
    }
    else {
      history.push('/dashboard')
    }
  }

  render() {
    const {
      authenticationError
    } = this.props

    return (
      <div className="wrapper">
        <h3 className="heading"> httpeace account login </h3>
        {
          authenticationError &&
          <div className="error"> Username or password incorrect </div>
        }
        <form className="form loginForm">
          <input
            className="text"
            placeholder="Username or email"
            name="username"
            value={this.state.username}
            type="text"
            onChange={this.onChange} />
          <input
            className="text"
            placeholder="Password"
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.onChange} />
          <button className="button" onClick={this.onClick}> Login </button>
        </form>
        <hr className="hr" />
        <Link className="link" to="/register"> New at httpeace? Click to register </Link>
        <Link className="link" to="/reset"> Forgot username or password? </Link>
      </div>
    )
  }
}