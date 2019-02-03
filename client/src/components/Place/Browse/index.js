import React, { Component } from 'react'
import Geocode from 'react-geocode'
require('dotenv').config()

export default class Browse extends Component {

  state = {
    cityname: this.props.city.cityname,
    lat: "",
    lng: ""
  }
  
  handleSubmit = (e) => {
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
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='submit' value='Browse' />
        </form>
      </div>
    )
  }
}
