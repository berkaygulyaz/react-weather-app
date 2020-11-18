import React, {  } from "react";
import locationImg from '../../img/placeholder.png'
import './style.css';

export default function Welcome(props){
    const {weatherData} = props;
    const {location} = weatherData;
    
    return (
        <div>
            {
                !location ? (
                    <div className="welcome-wrapper">
                        <img src={locationImg} alt="location"/>
                        <p className="wait-text">
                            Lütfen konumunuz bulunana kadar bekleyin
                        </p>
                        <small className="request-text">(Lütfen konum erişimi için izin verip sayfayı yenileyin)</small>
                    </div>
                    ) : (
                        console.log("Lokasyon bilgisi alındı")
                )
            }
        </div>
        
    )
}