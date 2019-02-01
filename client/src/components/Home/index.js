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
  

    }
    render () {
      
    let {user} = this.state
    if (user) {
        return (
          <div>
            <h1>Adventure Time</h1>
            <Link to='/profile/city'>City</Link>
            <p>{user.cities[1].city}</p>
    
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
