import React, { } from "react";
import './style.css';

export default function CityInfo(props){

    const {weatherData} = props;
    const {location} = weatherData;

    return(
        <div className="city-info-wrapper">
            <h1 className="city-name">{location}</h1>
        </div>
    )
}
