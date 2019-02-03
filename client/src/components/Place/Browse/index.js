import React, { Component } from 'react'
import Geocode from 'react-geocode'

export default class Browse extends Component {
  componentDidMount () {
    Geocode.setApiKey('AIzaSyAJ0Of64whXLwpGO_D2VK37R-r4oKID6TY')
    debugger
    // Geocode.fromAddress(`${this.props.user.city}`)
    // debugger
  }

  render () {
    return (
      <div>
        <form>
          <input type='submit' value='Browse' />
        </form>
      </div>
    )
  }
}
