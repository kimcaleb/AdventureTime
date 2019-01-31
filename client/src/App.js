import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import httpClient from './utilities/httpClient'

class App extends Component {

  state = {
    currentUser: httpClient.getCurrentUser()
  }

  onAuthSuccess = () => {
    this.setState({currentUser:httpClient.getCurrentUser()})
  }


  render() {
    return (
      <Layout currentUser={this.state.currentUser}>
        <Switch>
        <Route exact path="/" render={(props) => {
						return <Login {...props} onLoginSuccess={this.onAuthSuccess} />
					}}/>
          <Route path='/profile' component={Home} />
        </Switch>
      </Layout>

     
    );
  }
}

export default App;
