import React from 'react';
import './App.css';

export const WeatherCard = ({time, picture, temperature}) => {
    return (
        <div className="right-panel-card">
            <div className="right-panel-card__time">
                {time}
            </div>
            <div className="right-panel-card__picture">
                <img className="right-panel-card__image" src={picture}></img>
            </div>
            <div className="right-panel-card__temperature">
                {temperature + "°"}
            </div>
        </div>
    )
}

export default WeatherCard;
