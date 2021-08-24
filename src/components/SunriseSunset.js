import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const SunriseSunset = () => {
    const weather = useSelector(({weather}) => weather.weather);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);

    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);

    useEffect(() => {
        if (weatherLoad) {
            let date = new Date(weather.current.sunrise * 1000);
            setSunrise(date.toLocaleTimeString());
            date = new Date(weather.current.sunset * 1000)
            setSunset(date.toLocaleTimeString());
        }
    }, [weatherLoad])
    return (
        <div>
            {weatherLoad && (
                <div className="highlights__component">
                    <div className="highlights__component-text">
                        Sunrise & Sunset
                    </div>
                    <div>
                        {sunrise}
                    </div>
                    <div>
                        {sunset}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SunriseSunset;
