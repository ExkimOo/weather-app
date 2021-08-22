import {useEffect, useState, React } from 'react';
import { useSelector } from 'react-redux';

export const Clouds = () => {
    const weather = useSelector(({weather}) => weather.weather);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);

    const [clouds, setClouds] = useState(null);
    const [desc, setDesc] = useState(null);

    useEffect(() => {
        if (weatherLoad) {
            setClouds(weather.current.clouds); 
        }
    }, [weatherLoad]);

    useEffect(() => {
        if (weatherLoad) {
            setDesc(weather.current.weather[0].description);
        }
    }, [weatherLoad]);

    return (
        <div>
            {weatherLoad && (
                <div className="highlights__component">
                    <div className="highlights__component-text">
                        Clouds
                    </div>
                    <div>
                        {clouds}%
                    </div>
                    <div>
                        {desc}
                    </div>
                </div>  
            )}
        </div>
        
        
    )
}

export default Clouds;
