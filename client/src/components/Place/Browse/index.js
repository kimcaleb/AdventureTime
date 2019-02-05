import React, { Component } from 'react'
import Geocode from 'react-geocode'
import axios from 'axios'
import Results from './Results'
require('dotenv').config()

export default class Browse extends Component {

  state = {
    cityname: this.props.city.cityname,
    typeOfPlace: "",
    results: []
  }
  
  handleSubmit = async (e) => {
    e.preventDefault()
    Geocode.setApiKey(process.env.REACT_APP_API_KEY);
    let res = await Geocode.fromAddress(`${this.state.cityname}`);
    const {lat,lng} = res.results[0].geometry.location;
    try {
      let { data: {data : { results } } } = await axios.get(`/browse?lat=${lat}&lng=${lng}&type=${this.state.typeOfPlace}`)
      this.setState({results})
      debugger
    } catch(err) {
      console.log(err);
    }
  
    
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
            {(this.state.results.length > 0) ? (<Results city={this.props.city.city} currentUserId={this.props.currentUserId} results={this.state.results} history={this.props.history}/> ) : ( <div></div>)
            }
      </div>
    )
  }
}
