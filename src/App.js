import React, { Component } from 'react';
import './App.css';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Landing from './Components/Landing/landing';
import About from './Components/about/about';
import Beer from './Components/beers/beers';
import Merch from './Components/merch/merch';

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
        <Header routeChange={this.onRouteChange}/>
        <Footer />
        {
          this.state.route === 'home' ?
            <div>
              <Landing />
            </div>
            : null
        }
        {
          this.state.route === 'about' ?
            <div>
              <About />
            </div>
            : null
        }
        {
          this.state.route === 'beer' ?
            <div>
              <Beer />
            </div>
            : null
        }
        {
          this.state.route === 'merch' ?
            <div>
              <Merch />
            </div>
            : null
        }
      </div>
    )
  }
}

export default App;
