import React, { Component } from "react";
import './style.css';

class CityInfo extends Component{

    state= {
        coords: {
            latitude: 45,
            longtitude: 60
        }
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
            })
        } else {
            console.log("Location Not Found")
        }
    }
    
    render() {
        return(
            <div className="city-info-wrapper">
                <h1 className="city-name">İstanbul</h1>
                <span className="date-time">19 August 2020 - 22:03:02</span>
            </div>
        )
    }
}

export default CityInfo;