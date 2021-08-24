import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import sun from '../assets/img/sunny.png';
import moon from '../assets/img/moon.png';

export const SunriseSunset = () => {
    const weather = useSelector(({weather}) => weather.weather);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);

    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);

    useEffect(() => {
        if (weatherLoad) {
            let date = new Date(weather.current.sunrise * 1000);
            setSunrise(date.toString().slice(16, 21));
            date = new Date(weather.current.sunset * 1000)
            setSunset(date.toString().slice(16, 21));
        }
    }, [weatherLoad])
    return (
        <div className="highlights__wrapper">
            {weatherLoad && (
                <div className="highlights__component">
                    <div className="highlights__component-text">
                        Sunrise & Sunset
                    </div>
                    <div className="highlights__sunrise-sunset-wrapper">
                        <img className="highlights__sunrise-sunset" src={sun}></img>
                        {sunrise}
                    </div>
                    <div className="highlights__sunrise-sunset-wrapper">
                        <img className="highlights__sunrise-sunset" src={moon}></img>
                        {sunset}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SunriseSunset;
