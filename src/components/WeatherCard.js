import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

const WeatherCard = ({date, picture, tempMin, tempMax, activeUnit}) => {
    const dt = new Date(date * 1000)

    const unit = useSelector(({unit}) => unit.unit);

    const [minTemp, setMinTemp] = useState(null);
    const [maxTemp, setMaxTemp] = useState(null);

    useEffect(() => {
        if (unit === "C")
        {
            setMinTemp(Math.round(tempMin - 273.15));
            setMaxTemp(Math.round(tempMax - 273.15));
        } else {
            setMinTemp(Math.round(1.8*(tempMin - 273) + 32));
            setMaxTemp(Math.round(1.8*(tempMax - 273) + 32));
        }
    }, [unit])

    return (
        <div className="right-panel-card">
            <div className="right-panel-card__time">
                {activeUnit === "Week" ? dt.toString().slice(0, 4) : `${dt.getHours()}:00`}
            </div>
            <div className="right-panel-card__picture">
                <img className="right-panel-card__image" src={picture}></img>
            </div>
            <div className="right-panel-card__time">
                <span className="right-panel-card__temperature">{minTemp}&deg;</span>
                {activeUnit === "Week" && <span className="right-panel-card__temperature temp_max">{maxTemp}&deg;</span>}
            </div>
        </div>
    )
}

export default WeatherCard;
