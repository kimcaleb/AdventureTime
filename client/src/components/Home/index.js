import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import './home.css'


export default class Profile extends Component {
   state = {
      user:null
   }

   //// this is bringing in data for user
    componentDidMount() { 
     axios.get(`/api/users/${this.props.currentUser._id}`)
        .then( res => {
          this.setState({user:res.data.payload})
        });
    }


//// this is handle the city delete button


    handleDelete = (e) => {
      e.preventDefault()
      axios.delete(`/api/users/${this.props.currentUser._id}/cities/${e.target.target}`)
      .then( res => {
        this.setState({ user:res.data.updatedUser })
      }
      )
    }


////  this is handling the places delete button


    handleDeletePlace = (e) => {
      e.preventDefault()
      debugger
      axios.delete(`/api/users/${this.props.currentUser._id}/cities/${e.target.slot}/places/${e.target.target}`)
      .then( res => {
        debugger
        this.setState({ user:res.data.user })
      }
      )
    }


////this is handling the add new place button


    handleAddNewPlace = (e) => {
      e.preventDefault()
      debugger
      this.props.history.push({
        pathname: '/profile/place',
        state: { city: e.target.target, cityname:e.target.title  }
      })
    }


    render () {
    let {user} = this.state
    if (user) {
        return (
        <div className="hero">
          <div>
            <h1>Adventure Time</h1>
            <div className="addCity">
            <p><Link className="addCityLink" to='/profile/city'>Add A City!</Link></p>
            </div>
            {user.cities.map((city, index) => {
              return (
                <div key={index} className="cityBox">
                  <div className="placeHeader">
                    <h2 className="cityTitle" key={city._id}>{city.city}, {city.country}</h2>
                    <form onSubmit={this.handleDelete} target={city._id}>
                      <input className="btn" value="delete" type="submit"/>
                    </form>
                    <form onSubmit={this.handleAddNewPlace} title={city.city} target={city._id}>
                      <input className='btn' value='Add New Place' type='submit'/>
                    </form>
                  </div>
                {city.places.map((place, index) => {
                    return (
                      <div className="placeList" key={place._id}>
                        <h3 className="placeTitle"><a href={`https://www.google.com/search?&q="${place.name}"`} target="_blank" rel="noopener noreferrer"> {place.name}</a></h3>
                        <p> {place.types}</p>
                        <p><a href={`https://www.google.com/maps/place/${place.vicinity}`} target="_blank" rel="noopener noreferrer">{place.vicinity}</a></p>
                        <p>{place.types2}</p>
                        <p>{place.rating}/5, Total Reviews:{place.user_ratings_total}</p>
                        <img src={`${place.icon}`} alt="not available" />
                        <form onSubmit={this.handleDeletePlace} target={place._id} slot={city._id}>
                          <input className="btn" value="pd" type="submit"/>
                        </form>
                      </div>
               )
             })}
              </div>
             ) })}
          </div>
        </div>
      ) } else {
        return (
          <div>
            <h1>Adventure Time</h1>
            <Link to='/profile/city'>City</Link>
          </div>
          )
      }
  }
  
}
