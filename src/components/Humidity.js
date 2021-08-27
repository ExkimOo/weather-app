import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import humidity from '../assets/img/humidity.png';

const humidityStatusArr = ['Dry', 'Pleasant', 'Comfortable', 'Sticky', 'Uncomfortable', 'Opresive', 'Miserable'];

export const Humidity = () => {
    const weather = useSelector(({weather}) => weather.weather);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);

    const [hum, setHum] = useState(null);
    const [humStatus, setHumStatus] = useState(null);

    useEffect(() => {
        if (weatherLoad) {
            setHum(weather.current?.humidity);
            if (weather.current.humidity <= 50) {
                setHumStatus(humidityStatusArr[0]);
            }
            else if (weather.current.humidity > 50 && weather.current.humidity <= 55) {
                setHumStatus(humidityStatusArr[1]);
            }
            else if (weather.current.humidity > 55 && weather.current.humidity <= 60) {
                setHumStatus(humidityStatusArr[2]);
            }
            else if (weather.current.humidity > 60 && weather.current.humidity <= 65) {
                setHumStatus(humidityStatusArr[3]);
            }
            else if (weather.current.humidity > 65 && weather.current.humidity <= 70) {
                setHumStatus(humidityStatusArr[4]);
            }
            else if (weather.current.humidity > 70 && weather.current.humidity <= 75) {
                setHumStatus(humidityStatusArr[5]);
            }
            else if (weather.current.humidity > 75) {
                setHumStatus(humidityStatusArr[6]);
            }
        }
    }, [weatherLoad])

    return (
        <div className="highlights__wrapper">
            {weatherLoad && (
                <div className="highlights__component">
                    <div className="highlights__component-text">
                        Humidity
                    </div>
                    <div className="highlights__component-humidity-wrapper">
                        <img src={humidity} className="highlights__component-humidity"></img>
                        <div className="highlights__component-info_text">
                            {hum}%
                        </div>
                    </div>
                    <div className="highlights__component-bottom-text">
                        {humStatus}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Humidity;
