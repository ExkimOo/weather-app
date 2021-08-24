import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; 

import SearchBar from './SearchBar';
import Home from './Home';
import './App.css';

import weatherImg from '../utils/weatherImg';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday']

const LeftPanel = () => {
    const date = new Date();

    const geolocation = useSelector(({location}) => location.geolocation);
    const weather = useSelector(({weather}) => weather.weather);
    const unit = useSelector(({unit}) => unit.unit);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);
    
    const [temp, setTemp] = useState(null);

    useEffect(() => {
        if (weatherLoad)
        {
            if (unit === "C")
            {
                setTemp(Math.round(weather.current.temp - 273.15));
            } else {
                setTemp(Math.round(1.8*(weather.current.temp - 273) + 32));
            }
        }
    }, [weatherLoad, unit])

    return (
        <div className="left-panel">
            <div className="left-panel__container">
                <div className="left-panel__header">
                    <SearchBar />
                    <Home />
                </div>
                <img className="left-panel__image" src={weatherImg(weather.current?.weather[0].id)} alt="Weather"></img>
                <div className="left-panel-text__temperature left-panel-text">
                        {temp}&deg;{unit}
                </div>
                <div className="left-panel-text__location left-panel-text">
                    {geolocation?.city}, {geolocation?.country}
                </div>
                <div className="left-panel-text__day left-panel-text">
                    {daysOfWeek[date.getDay()]}
                </div>
                <div className="left-panel-text__time left-panel-text">
                    {date.toTimeString().slice(0,5)}
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;
