import { useEffect, useState, React } from 'react';
import { useSelector } from 'react-redux';

import cloud from '../assets/img/cloud.png';

export const Clouds = () => {
    const weather = useSelector(({weather}) => weather.weather);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);

    const [clouds, setClouds] = useState(null);
    const [desc, setDesc] = useState(null);

    useEffect(() => {
        if (weatherLoad) {
            setClouds(weather.current.clouds); 
            setDesc(weather.current.weather[0].description);
        }
    }, [weatherLoad]);

    return (
        <div className="highlights__wrapper">
            {weatherLoad && (
                <div className="highlights__component">
                    <div className="highlights__component-text">
                        Clouds
                    </div>
                    <div className="highlights__component-clouds-wrapper">
                        <img src={cloud} className="highlights__component-clouds"></img>
                        <div className="highlights__component-info_text">
                            {clouds}%
                        </div>
                    </div>
                    <div className="highlights__component-bottom-text">
                        {desc?.split(' ').map((obj) => {
                            return(
                                obj[0].toUpperCase() + obj.substring(1) + " "
                            )
                        })}
                    </div>
                </div>  
            )}
        </div>
        
        
    )
}

export default Clouds;
