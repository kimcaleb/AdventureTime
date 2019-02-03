import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import httpClient from './utilities/httpClient'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Edit from './components/Edit'
import City from './components/City'
import Place from './components/Place'
require('dotenv').config()

class App extends Component {

  state = {
    currentUser: httpClient.getCurrentUser()
  }

  onAuthSuccess = () => {
    this.setState({currentUser:httpClient.getCurrentUser()})
  }

  logOut = () => {
    httpClient.logout()
    this.setState({ currentUser: null })
  }


  render() {
    return (
      <Layout currentUser={this.state.currentUser}>
        <Switch>
          <Route exact path="/" render={(props) => {
						return <Login {...props} onLoginSuccess={this.onAuthSuccess} />
					}}/>
          <Route exact path='/logout' render={() => {
            return <Logout logOut={this.logOut} /> 
          }} />
          <Route exact path='/profile' render={(props) => {
          return <Home {...props} currentUser={this.state.currentUser} /> }} />
          <Route path='/signup' render={(props) => {
						return <Signup {...props} onSignupSuccess={this.onAuthSuccess} />
					}}/>
          <Route exact path='/profile/edit' render={(props) => {
						return <Edit {...props} currentUser={this.state.currentUser} onLoginSuccess={this.onAuthSuccess} />
					}}/>
          <Route exact path='/profile/city' render={(props) => {
          return <City {...props} currentUser={this.state.currentUser} /> }} />
          <Route exact path='/profile/place' render={(props) => {
          return <Place {...props} currentUser={this.state.currentUser} /> }} />       
        </Switch>
      </Layout>

     
    );
  }
}

export default App;
