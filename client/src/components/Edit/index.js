import React, { Component } from 'react'
import httpClient from '../../utilities/httpClient';


export default class Edit extends Component {
    state= {
        name: "",
        email: "",
        password: "",
        PlaceName: ""
    }
    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({[name]: value })
       console.log(this.state.name)
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let user = await httpClient.authenticate(this.state, '/api/users/authenticate');
        if (user) {
            this.props.onLoginSuccess()
            this.props.history.push('/profile')
        }
    }
  render () {
      
    let { currentUser } = this.props
    let { name, email, password, PlaceName } = this.state
    return (
      <div>
        <h1>Adventure Time</h1>
        <h3>Edit Profile</h3>
        <div className='row'>
          <div className='column column-50 column-offset-25'>
            <form onSubmit={this.handleSubmit}>
              <label>Name: </label>
              <input
                type='text'
                name='name'
                placeholder={`${currentUser.name}`}
                onChange={this.handleChange}
                value={`${currentUser.name}`}
              />
              <label>Email: </label>
              <input
                type='text'
                name='email'
                placeholder={`${currentUser.email}`}
                onChange={this.handleChange}
                value={`${currentUser.email}`}
              />
              <label>Password: </label>
              <input
                type='password'
                name='password'
                placeholder='Secret Password...'
                onChange={this.handleChange}
                value={password}
              />
              <label>City: </label>
              <select
                type='text'
                name='PlaceName'
                onChange={this.handleChange}
                value={`${currentUser.PlaceName}`}>
                <option value=''>Select a state</option>
                <option value='Los Angeles'>Los Angeles</option>
                <option value='New York City'>New York City</option>
                <option value='Miami'>Miami</option>
              </select>
              <input type='submit' />
            </form>
          </div>
        </div>
      </div>

    )
  }
}
