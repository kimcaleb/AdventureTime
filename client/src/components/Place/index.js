import React, { Component } from 'react'
import httpClient from '../../utilities/httpClient'
import Browse from './Browse'

export default class Place extends Component {
    state= {
        name: "",
        types: "",
        city: null,
        results:[]

    }
    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = async (e) => {
      e.preventDefault()
      let city = await httpClient.addNewPlace(this.state, `/api/users/${this.props.currentUser._id}/cities/${this.props.location.state.city}/places`)
      if (city){
          this.props.history.push('/profile')
      } else {
          console.log('No Place Added, Error Found')
      }
    }
  render () {
    debugger
      let { name, types } = this.state
    return (
<div className='hero'>
  <div className='login'>
    <h1>Adventure Time</h1>
    <h3>Where do you want to go in {this.props.location.state.cityname}?</h3>
    <div className='placeBox'>
        <form onSubmit={this.handleSubmit} className='form'>
          <label className='label'>Add a Place You Want To Go Here</label>
          <input
          className='input'
            type='text'
            name='name'
            placeholder='Los Angeles...'
            onChange={this.handleChange}
            value={name}
          />
          <label className='label'>description</label>
          <input
          className='input'
            type='text'
            name='types'
            placeholder='United States...'
            onChange={this.handleChange}
            value={types}
          />
          <input type='submit' />
        </form>
    </div>
      <div>
      <Browse city={this.props.location.state} currentUserId={this.props.currentUser._id} history={this.props.history}/>
      </div>
  </div>
</div>
    )
  }
}
