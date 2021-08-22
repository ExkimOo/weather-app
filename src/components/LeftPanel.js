import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; 

import SearchBar from './SearchBar';
import Home from './Home';
import './App.css';

import rain from '../assets/media/rainy.png'

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday']

export const LeftPanel = () => {
    const date = new Date();

    const geolocation = useSelector(({location}) => location.geolocation);
    
console.log(date.toTimeString())
    return (
        <div className="left-panel">
            <div className="left-panel__container">
                <div className="left-panel__header">
                    <SearchBar />
                    <Home />
                </div>
                <img className="left-panel__image" src={rain} alt="Weather"></img>
                <div className="left-panel-text__temperature left-panel-text">
                    15°C
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
