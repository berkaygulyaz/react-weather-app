import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from "axios"
import Boxes from './components/boxes';
import CityInfo from './components/city-info';
import Container from './components/container';
import Welcome from './components/welcome';

function App() {
  
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState(null)

  navigator.geolocation.getCurrentPosition(
    position => {
      setCurrentLongitude(position.coords.longitude);
      setCurrentLatitude(position.coords.latitude);
    }
  );

  useEffect(() => {
      Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentLatitude}&lon=${currentLongitude}&exclude=hourly&appid=46470136edd4f53667ef9efa0cd415da&units=metric`).then(res => {
        // let weatherInfo = {
        //     location: res.data.timezone,
        //     daily: res.data.daily,
        //     currentDateTime: new Date().toLocaleString(),
        // }

        setLocation(res.data.timezone)
        setWeather(res.data.daily)
      })
  }, [currentLatitude])
  

  return (
    <div className="weather-app-wrapper">
      <Container>
        {
          !currentLatitude && !currentLongitude && (
            <Welcome/>
          )
        } 
        <CityInfo yourLocation={location} />
        <Boxes weatherData={weather} />
      </Container>
    </div>
  )
}

export default App;
