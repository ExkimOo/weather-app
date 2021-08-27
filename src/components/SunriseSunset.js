import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import sun from '../assets/img/sun.png';
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
                        <img className="highlights__sunrise" src={sun}></img>
                        <div className="highlights__component-info_text">
                            {sunrise}
                        </div>
                    </div>
                    <div className="highlights__sunrise-sunset-wrapper">
                        <img className="highlights__sunset" src={moon}></img>
                        <div className="highlights__component-info_text">
                            {sunset}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SunriseSunset;
