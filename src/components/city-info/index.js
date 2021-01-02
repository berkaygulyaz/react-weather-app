import React, { } from "react";
import './style.css';

const CityInfo = ({yourLocation}) => {

    return(
        <div className="city-info-wrapper">
            {
               yourLocation ? (
                    <h1 className="city-name">{yourLocation}</h1>
               ) : (
                   console.log("Lokasyon Bulunamadı")
               )
            }
        </div>
    )
}

export default CityInfo;