import React, { Component } from 'react';
import './App.css';
import Axios from "axios"
import Boxes from './components/boxes';
import CityInfo from './components/city-info';
import Container from './components/container';
import Welcome from './components/welcome';

class App extends Component {

    state= {
      coords: {
          latitude: 45,
          longtitude: 60
      },
      data: {}
    }

    componentDidMount() {

        // Get Location
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let newCoords = {
                    latitude: position.coords.latitude,
                    longtitude: position.coords.longitude
                }

                this.setState({coords: newCoords})
                Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coords.latitude}&lon=${this.state.coords.longtitude}&exclude=hourly&appid=46470136edd4f53667ef9efa0cd415da&units=metric`).then(res => {
                    let weatherInfo = {
                        location: res.data.timezone,
                        daily: res.data.daily,
                        currentDateTime: new Date().toLocaleString(),
                    }
                    this.setState({
                        data: weatherInfo
                    })
                    console.log(this.state.data)
                    console.log(res.data)
                })

            })
        } else {
            console.log("Location Not Found")
        }
    }

  render() {
    return (
      <div className="weather-app-wrapper">
        <Container>
          <Welcome weatherData={this.state.data}></Welcome>
          <CityInfo weatherData={this.state.data}></CityInfo>
          <Boxes weatherData={this.state.data}></Boxes>
        </Container>
      </div>
    )
  }
}

export default App;
