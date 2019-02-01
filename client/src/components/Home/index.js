import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export default class Profile extends Component {
   state = {
      user:null
   }
    componentDidMount() { 
     axios.get(`/api/users/${this.props.currentUser._id}`)
        .then( res => {
          this.setState({user:res.data.payload})
        });
        debugger
    }

    handleDelete = (e) => {
      e.preventDefault()
      debugger
      axios.delete(`/api/users/${this.props.currentUser._id}/cities/${e.target.title}`)
      .then( res => {
      debugger
        this.setState({ user:res.data.updatedUser })
      }

      )
    }
    render () {
      
    let {user} = this.state
    
    if (user) {
        return (
          <div>
            <h1>Adventure Time</h1>
            <Link to='/profile/city'>City</Link>
            {user.cities.map((city, index) => {
              return (
                <div key={index}>
                <form onSubmit={this.handleDelete} title={city._id}>

                 <p key={index}>{city.city}, {city.country}</p>
            
                 <input type='hidden' value={city._id} />
                 <input value="delete" type="submit"/>
            </form>
            </div>
             ) })}
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
