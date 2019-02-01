import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  render () {
    let { cities } = this.props.currentUser
    debugger
    return (
      <div>
        <h1>Adventure Time</h1>
        <Link to='/profile/city'>City</Link>
        <p>{cities[0].city}</p>

      </div>

    )
  }
}
