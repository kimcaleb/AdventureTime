import React, { Component } from 'react'
import httpClient from '../../utilities/httpClient';

export default class City extends Component {
    state= {
        title: "",
        description: ""
    }
    componentDidMount() {
      debugger
    }
    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]:value})
    }

        handleSubmit = async (e) => {
        e.preventDefault()
        let city = await httpClient.addNewPlace(this.state, `/api/users/${this.props.currentUser._id}/cities/${this.props.location.state.city}/places`)
        debugger
        if (city){
            this.props.history.push('/profile')
        } else {
            console.log('we suck')
        }
    }
  render () {
      let { title, description } = this.state
      debugger
    return (
      <div className='hero'>
        <div className='login'>
          <h1>Adventure Time</h1>
          <h3>What are your points of interest?</h3>
          <div className='row'>
            <div className='column column-50 column-offset-25'>
              <form onSubmit={this.handleSubmit} className='form'>
                <label className='label'>title</label>
                <input
                className='input'
                  type='text'
                  name='title'
                  placeholder='Los Angeles...'
                  onChange={this.handleChange}
                  value={title}
                />
                <label className='label'>description</label>
                <input
                className='input'
                  type='text'
                  name='description'
                  placeholder='United States...'
                  onChange={this.handleChange}
                  value={description}
                />
                <input type='submit' />
              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
