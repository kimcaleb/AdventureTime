import React, { Component } from 'react'
import httpClient from '../../../../utilities/httpClient'

export default class Results extends Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    let city = await httpClient.addNewPlace(this.state, `/api/users/${this.props.currentUser._id}/cities/${this.props.city.city}/places`)
    if (city){
        this.props.history.push('/profile')
    } else {
        console.log('we suck')
    }
  }

  render () {
    debugger
    return (
      <div className='border'>
        {this.props.results.map(function (result, index) {
          return (
            <div className='imgcon'>
              <form onSubmit={this.handleSubmit}>
                <h3>{result.name}</h3>
                <p>{result.vicinity}</p>
                <p>{result.rating}, {result.user_ratings_total}</p>
                <img src={`${result.icon}`} />
                <input value='Add Place' type='submit' />
              </form>
            </div>
          )
        })}
      </div>
    )
  }
}
