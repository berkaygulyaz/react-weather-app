import React, { Component } from 'react';
import './App.css';
import Axios from "axios"
import Boxes from './components/boxes';
import CityInfo from './components/city-info';
import Container from './components/container'

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

                Axios.get(`http://api.weatherstack.com/current?access_key=062a378feeaaea0e3223c1b5aaf158ca&query=${this.state.coords.latitude},${this.state.coords.longtitude}`).then(res => {
                    let weatherInfo = {
                        location: res.data.location.region,
                        country: res.data.location.country,
                        temperature: res.data.current.temperature,
                        time: res.data.location.localtime,
                    }
                    this.setState({
                        data: weatherInfo
                    })
                    console.log(this.state.data)
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
          <CityInfo></CityInfo>
          <Boxes></Boxes>
        </Container>
      </div>
    )
  }
}

export default App;
