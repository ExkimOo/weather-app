import React from 'react';
import Degrees from './Degrees';
import WeatherCard from './WeatherCard';

export const RightPanel = ({states}) => {
    return (
        <div className="right-panel">
            <div className="right-panel__container">
                <div className="right-panel-text__wrapper">
                    <span className="interval_text active">Today</span>
                    <span className="interval_text">Week</span>
                </div>
                <div className="right-panel-ellipse__wrapper">
                    <Degrees text="°C" active={true}/>
                    <Degrees text="°F" active={false}/>
                </div>
                <div className="right-panel-card__wrapper">
                    {states.map((s) => {
                        return(
                            <WeatherCard time={s.time} picture={s.picture} temperature={s.temperature}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RightPanel;
