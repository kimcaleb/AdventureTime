import React, { Component } from 'react'
import Geocode from 'react-geocode'
import Httpclient from '../../../utilities/httpClient'
require('dotenv').config()

export default class Browse extends Component {

  state = {
    cityname: this.props.city.cityname,
    lat: "",
    lng: "",
    typeOfPlace: "",
    results: []
  }
  
  handleSubmit = async (e) => {
    e.preventDefault()
    Geocode.setApiKey(process.env.REACT_APP_API_KEY)
    Geocode.fromAddress(`${this.state.cityname}`).then(
      res => {
        const {lat,lng} = res.results[0].geometry.location
        this.setState({lat,lng})
        console.log(this.state.lat,this.state.lng)
      },
      err => {
        console.error(err)
      }
    )
    let results = await Httpclient.searchNearbyPlaces(this.state, `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.REACT_APP_API_KEY}&location=${this.state.lat},${this.state.lng}&radius=50000&type=${this.state.typeOfPlace}`)
    debugger
  }

    handleChange = (e) => {
      let { name, value } = e.target
      this.setState({ [name]: value })    
  }
  render () {
    let {typeOfPlace} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Type: </label>
            <select
              className='input'
              type='text'
              name='typeOfPlace'
              onChange={this.handleChange}
              value={typeOfPlace}>
                  <option value="">All</option>
                  <option value="amusement_park">Amusement Parks</option>
                  <option value="art_gallery">Art Galleries</option>
                  <option value="aquarium">Aquariums</option>
                  <option value="bar">Bars</option>
                  <option value="book_store">Book Stores</option>
                  <option value="bowling_alley">Bowling Alleys</option>
                  <option value="cafe">Cafes</option>
                  <option value="campground">Campgrounds</option>
                  <option value="casino">Casinos</option>
                  <option value="movie_theatre">Movie Theatres</option>
                  <option value="night_club">Night Clubs</option>
                  <option value="restaurant">Restaurants</option>
                  <option value="shopping_mall">Shopping Malls</option>
                  <option value="spa">Spas</option>
                  <option value="zoo">Zoo</option>
              </select>
              <input type='submit' value="Browse" />
            </form>
      </div>
    )
  }
}
