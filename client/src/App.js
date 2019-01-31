import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import httpClient from './utilities/httpClient'
import Signup from './components/Signup'
import Logout from './components/Logout'

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
          <Route path='/profile' component={Home} />
          <Route path='/signup' render={(props) => {
						return <Signup {...props} onSignupSuccess={this.onAuthSuccess} />
					}}/>
        </Switch>
      </Layout>

     
    );
  }
}

export default App;
