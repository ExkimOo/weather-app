import React from 'react';
import SearchBar from './SearchBar';
import Home from './Home';
import './App.css';

export const LeftPanel = () => {
    return (
        <div className="left-panel">
            <div className="left-panel__header">
                <SearchBar />
                <Home />
            </div>
            <img class="left-panel__image" src="../../public/media/rainy.png" alt="Weather"></img>
        </div>
    )
}

export default LeftPanel;
