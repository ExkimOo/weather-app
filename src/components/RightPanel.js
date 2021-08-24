import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Clouds from './Clouds';
import Degrees from './Degrees';
import Humidity from './Humidity';
import MinMaxTemp from './MinMaxTemp';
import SunriseSunset from './SunriseSunset';
import Visibility from './Visibility';
import WeatherCard from './WeatherCard';
import WindStatus from './WindStatus';
import Map from './Map';

import weatherImg from '../utils/weatherImg';

const optionType = ['Day', 'Week'];
const degrees = ['C', 'F'];

export const RightPanel = ({states}) => {
    const weather = useSelector(({weather}) => weather.weather);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);

    const [activeUnit, setActiveUnit] = useState('Day');

    return (
        <div className="right-panel">
            <div className="right-panel__container">
                <div className="right-panel-text__wrapper">
                    {optionType.map((type) => {
                        return(
                            <span 
                            className={`interval_text ${
                                type === activeUnit ? "active" : ""
                            }`}
                            onClick={() => setActiveUnit(type)}>
                                {type}
                            </span>
                        )
                    })}
                </div>
                <div className="right-panel-ellipse__wrapper">
                    {degrees.map((obj) => {
                        return(
                            <Degrees text={obj}/>
                        )
                    })}
                </div>
                <div className="right-panel-card__wrapper">
                    {weatherLoad && (activeUnit === "Day" ? (
                        weather.hourly.slice(24).map((w, idx) => {
                            if (idx % 3 === 0)
                            {
                                return(
                                    <WeatherCard 
                                        date = {w.dt}
                                        tempMin = {w.temp}
                                        picture = {weatherImg(w.weather[0].id)}/>
                                )
                            }
                        })
                    )
                    :
                        weather.daily.map((w, idx) => {
                            if (idx === 0) return null;
                            return(
                                <WeatherCard 
                                    date = {w.dt}
                                    activeUnit = {activeUnit}
                                    tempMin = {w.temp.min}
                                    tempMax = {w.temp.max}
                                    picture = {weatherImg(w.weather[0].id)}
                                    key = {`${w.dt}_${idx}`}/>
                            )
                        })
                    )}
                </div>
                <div className="highlights__title">
                    Today's Highlights
                </div>

                <div className="highlights__main">
                    <div className="highlights__block">
                        <div className="hightlights__row">
                           <WindStatus />
                           <SunriseSunset />
                           <Visibility />
                        </div>
                        <div className="hightlights__row">
                            <MinMaxTemp />
                            <Humidity />
                            <Clouds />
                        </div>
                    </div>
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default RightPanel;
