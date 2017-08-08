import React, { Component } from 'react';
import { func, object } from 'prop-types';

export default class Dashboard extends Component {
  static propTypes = {
    history: object.isRequired,
    onSubmit: func.isRequired
  }

  onClick = (e) => {
    const {
      history,
      onSubmit
    } = this.props
    
    onSubmit(e);
    history.push('/login')
  }

  render() {
    return (
      <div>
        You are now logged in
        <button onClick={this.onClick} className="button">
          Click to logout
        </button>
      </div>
    )
  }
}