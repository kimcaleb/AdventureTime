import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Login exact path='/login' component={Login} />
        </Switch>
      </Layout>

     
    );
  }
}

export default App;
