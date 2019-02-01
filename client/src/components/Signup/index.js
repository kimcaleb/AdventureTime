import React, { Component } from 'react'
import httpClient from '../../utilities/httpClient'

export default class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        PlaceName: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value })
        
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let user = await httpClient.authenticate(this.state, "/api/users")
        if (user) {
            this.props.onSignupSuccess()
            this.props.history.push('/profile')
        }


    }

  render () {
    debugger
      let {name, email, password, PlaceName} = this.state
    return (
      <div className="hero">
      <div className="login">
        <h1>Adventure Time</h1>
        <h3>Sign Up</h3>
        <div className='row'>
          <div className='column column-50 column-offset-25'>
            <form onSubmit={this.handleSubmit}>
              <label>Name: </label>
              <input
              className='input'
                type='text'
                name='name'
                placeholder='Whats your name?'
                onChange={this.handleChange}
                value={name}
              />
              <label>Email: </label>
              <input
              className='input'
                type='text'
                name='email'
                placeholder='Whats Your Email?'
                onChange={this.handleChange}
                value={email}
              />
              <label>Password: </label>
              <input
              className='input'
                type='password'
                name='password'
                placeholder='Secret Password...'
                onChange={this.handleChange}
                value={password}
              />
              <label>City: </label>
              <select
              className='input'
              type='text'
              name='PlaceName'
              onChange={this.handleChange}
              value={PlaceName}>
                  <option value="">Select a state</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="New York City">New York City</option>
                  <option value="Miami">Miami</option>
              </select>
              <input type='submit' />
            </form>
          </div>
        </div>
      </div>
      </div>

    )
  }
}
