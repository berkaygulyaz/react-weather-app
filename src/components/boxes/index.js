import React, {  } from "react";
import shortId from "shortid"
import './style.css';

const Boxes = ({weatherData}) => {

    // console.log(weatherData)
    
    return(
        <div className="boxes-wrapper">
            {
                weatherData ? (
                    weatherData && weatherData.map((dailyItem) => {
                    const myDate = new Date(dailyItem.dt * 1000);
                    return (
                    <div className="box" key={shortId.generate()}>
                        <h3 className="day-name">{myDate.toLocaleDateString()}</h3>
                        <img src={`http://openweathermap.org/img/wn/`+ dailyItem.weather[0].icon + "@2x.png"} alt=""></img>
                        <span className="weather-rating">{dailyItem.temp.max}° / {dailyItem.temp.min}°</span>
                    </div>

                    )
                })
                ) : (
                    console.log("Lokasyon Bilgisi Bulunamadı")
                )
                
            }
        </div>
    )
}

export default Boxes;