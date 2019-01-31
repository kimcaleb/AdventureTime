import React, { Component } from 'react'
import httpClient from '../../utilities/httpClient';


export default class Edit extends Component {
    
    state= {
        name: this.props.currentUser.name,
        email: this.props.currentUser.email,
        password: "",
        PlaceName: this.props.currentUser.PlaceName 
    }
    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({[name]: value })
       console.log(this.state.name)
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let user = await httpClient.updateUser(this.state, `/api/users/${this.props.currentUser._id}`);
        if (user) {
            this.props.onLoginSuccess()
            this.props.history.push('/profile')
        }
    }

    handleDelete = async (e) => {
        e.preventDefault()
        let user = await httpClient.deleteUser(this.state,`/api/users/${this.props.currentUser._id}`)
        if (user) {
          this.props.history.push('/')
        }
    }
  render () {
      
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
                onChange={this.handleChange}
                value={name}
              />
              <label>Email: </label>
              <input
                type='text'
                name='email'
                onChange={this.handleChange}
                value={email}
              />
              <label>New Password: </label>
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
                value={PlaceName}>
                <option value=''>Select a state</option>
                <option value='Los Angeles'>Los Angeles</option>
                <option value='New York City'>New York City</option>
                <option value='Miami'>Miami</option>
              </select>
              <input type='submit' />
            </form>
           
            <form onSubmit={this.handleDelete}>
              <input type="submit" value="Delete Profile" />
            </form>
          </div>
        </div>
      </div>

    )
  }
}
