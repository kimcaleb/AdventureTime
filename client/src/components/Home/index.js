import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  render () {
    let { cities } = this.props.currentUser
    return (
      <div>
        <h1>Adventure Time</h1>
        <Link to='/profile/city'>City</Link>
        <p>{this.props.currentUser.cities.city}</p>

      </div>

    )
  }
}
