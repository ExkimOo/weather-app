import { useState, useEffect, React } from 'react';
import { useSelector } from 'react-redux';

import thermMax from '../assets/img/thermometer-max.png';
import thermMin from '../assets/img/thermometer-min.png';

export const MinMaxTemp = () => {
    const weather = useSelector(({weather}) => weather.weather);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);

    const [minTemp, setMinTemp] = useState(null);
    const [maxTemp, setMaxTemp] = useState(null);

    useEffect(() => {
        if (weatherLoad) {
            setMinTemp(Math.round(weather.daily[0].temp.min - 273.15));
            setMaxTemp(Math.round(weather.daily[0].temp.max - 273.15));
        }
    }, [weatherLoad]);

    return (
        <div className="highlights__wrapper">
            {weatherLoad && (
                <div className="highlights__component">
                    <div className="highlights__component-text">
                        Min & Max Temperature
                    </div>
                    <div className="highlights__min-max-wrapper">
                        <img src={thermMin} className="highlights__min-max"></img>
                        <div className="highlights__component-info_text">
                            {minTemp}&deg;
                        </div>
                    </div>
                    <div className="highlights__min-max-wrapper">
                        <img src={thermMax} className="highlights__min-max"></img>
                        <div className="highlights__component-info_text">
                            {maxTemp}&deg;
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MinMaxTemp;
