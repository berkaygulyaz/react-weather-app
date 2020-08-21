import React, { Component } from "react";
import Sun from '../../img/storm.png'
import './style.css';

class Boxes extends Component{
    render() {
        return(
            <div className="boxes-wrapper">
                <div className="box">
                    <h3 className="day-name">Monday</h3>
                    <img src={Sun} alt=""></img>
                    <span className="weather-rating">25°</span>
                    <small className="date">19 August 2020</small>
                </div>
                <div className="box">
                    <h3 className="day-name">Monday</h3>
                    <img src={Sun} alt=""></img>
                    <span className="weather-rating">25°</span>
                    <small className="date">19 August 2020</small>
                </div>
                <div className="box">
                    <h3 className="day-name">Monday</h3>
                    <img src={Sun} alt=""></img>
                    <span className="weather-rating">25°</span>
                    <small className="date">19 August 2020</small>
                </div>
                <div className="box">
                    <h3 className="day-name">Monday</h3>
                    <img src={Sun} alt=""></img>
                    <span className="weather-rating">25°</span>
                    <small className="date">19 August 2020</small>
                </div>
                <div className="box">
                    <h3 className="day-name">Monday</h3>
                    <img src={Sun} alt=""></img>
                    <span className="weather-rating">25°</span>
                    <small className="date">19 August 2020</small>
                </div>
            </div>
        )
    }
}

export default Boxes;