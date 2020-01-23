import React, { Component } from 'react';
import './App.css';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Landing from './Components/Landing/landing';

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
      <div>
        <Header />
        <Landing />
        <Footer />
      </div>
    )
  }
}

export default App;
