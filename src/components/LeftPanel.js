import React from 'react';
import SearchBar from './SearchBar';
import Home from './Home';
import './App.css';

import rainy from '../assets/media/rainy.png'


export const LeftPanel = () => {
    return (
        <div className="left-panel">
            <div className="left-panel__container">
                <div className="left-panel__header">
                    <SearchBar />
                    <Home />
                </div>
                <img class="left-panel__image" src={rainy} alt="Weather"></img>
                <div class="left-panel-text__temperature left-panel-text">
                    15°C
                </div>
                <div class="left-panel-text__location left-panel-text">
                    Krasnoyarsk, RU
                </div>
                <div class="left-panel-text__day left-panel-text">
                    Monday
                </div>
                <div class="left-panel-text__time left-panel-text">
                    15:55
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;
