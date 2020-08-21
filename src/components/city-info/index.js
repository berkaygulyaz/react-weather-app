import React, { Component } from "react";
import './style.css';

class CityInfo extends Component{
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