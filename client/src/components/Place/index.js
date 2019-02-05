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
      let { name, types2, vicinity } = this.state
    return (
<div className='hero'>
  <div className='login'>
    <h1>Adventure Time</h1>
    <h3>Where do you want to go in {this.props.location.state.cityname}?</h3>
    <div className='placeBox'>
        <form onSubmit={this.handleSubmit} className='form'>
          <label className='label'>Name of Place</label>
          <input
          className='input'
            type='text'
            name='name'
            placeholder='Name of Place'
            onChange={this.handleChange}
            value={name}
          />
          <label className='label'>Street Address</label>
          <input
          className='input'
            type='text'
            name='vicinity'
            placeholder='Where is it located?'
            onChange={this.handleChange}
            value={vicinity}
          />
           <label className='label'>What kind of place is it?</label>
          <input
          className='input'
            type='text'
            name='types2'
            placeholder='What kind of place is it? E.G. "Cafe"'
            onChange={this.handleChange}
            value={types2}
          />
          <input id="submitBtnForAddingPlace" className="btn" type='submit' />
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
