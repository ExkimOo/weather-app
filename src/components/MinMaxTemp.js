import { useState, useEffect, React } from 'react';
import { useSelector } from 'react-redux';

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
        <div>
            {weatherLoad && (
                <div className="highlights__component">
                    <div className="highlights__component-text">
                        Min & Max Temperature
                    </div>
                    <div>
                        {minTemp}&deg;
                    </div>
                    <div>
                        {maxTemp}&deg;
                    </div>
                </div>
            )}
        </div>
    )
}

export default MinMaxTemp;
