import React, { Component } from 'react'
import httpClient from '../../utilities/httpClient';

export default class City extends Component {
    state= {
        city: "",
        country: ""
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]:value})
    }

        handleSubmit = async (e) => {
        e.preventDefault()
        let cities = await httpClient.addNewCity(this.state, `/api/users/${this.props.currentUser._id}/cities`)
        if (cities){
        this.props.history.push('/profile')
        } else {
            console.log('we suck')
        }
    }
  render () {
      let { city, country } = this.state
    return (
      <div className='hero'>
        <div className='login'>
          <h1>Adventure Time</h1>
          <h3>Where do you want to go?</h3>
          <div className='row'>
            <div className="placeBox">
              <form onSubmit={this.handleSubmit}>
                <label className='label'>City</label>
                <input
                className='input'
                  type='text'
                  name='city'
                  placeholder='Los Angeles...'
                  onChange={this.handleChange}
                  value={city}
                />
                <label className='label'>Country</label>
                <input
                className='input'
                  type='text'
                  name='country'
                  placeholder='United States...'
                  onChange={this.handleChange}
                  value={country}
                />
                <input className="btn" id="submitBtnForEditingProfile" type='submit' />
              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
