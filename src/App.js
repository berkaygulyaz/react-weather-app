import React, { Component } from 'react';
import './App.css';
import Boxes from './components/boxes';
import CityInfo from './components/city-info';
import Container from './components/container'

class App extends Component {
  render() {
    return (
      <div className="weather-app-wrapper">
        <Container>
          <CityInfo></CityInfo>
          <Boxes></Boxes>
        </Container>
      </div>
    )
  }
}

export default App;
