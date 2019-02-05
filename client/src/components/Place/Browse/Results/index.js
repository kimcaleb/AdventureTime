import React, { Component } from 'react'
import httpClient from '../../../../utilities/httpClient'

export default class Results extends Component {
  
  handleSubmit = async (e, { name, vicinity, types, rating, icon, user_ratings_total }) => {
    debugger
    e.preventDefault()
    let types2 = `${types[0]},${types[1]}`
    let city = await httpClient.addNewPlace({ name, vicinity, icon, rating, user_ratings_total, types2 }, `/api/users/${this.props.currentUserId}/cities/${this.props.city}/places`)
    if (city){
       this.props.history.push('/profile')
    } else {
        console.log('Not Working')
    }
  }

  render() {
    return (
      <div className='border'>
        {this.props.results.map((result, index) => {
          return (
            <div className='imgcon' key={index}>
              <form onSubmit={(e) => { this.handleSubmit(e, result) } }>
                <h3 className='results-title'>{result.name}</h3>
                <p>{result.vicinity}</p>
                <p>{result.rating}/5, Total Reviews:{result.user_ratings_total}</p>
                <p>{result.types[0]}, {result.types[1]}</p>
                <div className="results-bottom">
                <img src={`${result.icon}`} alt="Not Available" />
                <input id="submitBtnForAddingPlaceToList"className='btn' value='Add Place' type='submit' />
                </div>
              </form>
            </div>
          )
        })}
      </div>
    )
  }
}
