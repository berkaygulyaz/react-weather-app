import React, {  } from "react";
import './style.css';

export default function Boxes(props){

    const {weatherData} = props;
    const {daily} = weatherData;
    return(
        <div className="boxes-wrapper">
            {
                daily && daily.map((dailyItem) => {
                    const myDate = new Date(dailyItem.dt * 1000);
                    return (
                    <div className="box">
                        <h3 className="day-name">{myDate.toLocaleDateString()}</h3>
                        <img src={`http://openweathermap.org/img/wn/`+ dailyItem.weather[0].icon + "@2x.png"} alt=""></img>
                        <span className="weather-rating">{dailyItem.temp.max}° / {dailyItem.temp.min}°</span>
                    </div>

                    )
                })
            }
        </div>
    )
}