import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'home'
    }
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  }
  render() {
    return (
    <Header />
    )
  }
}

export default App;
