import { useState, useEffect, React } from 'react';
import { useSelector } from 'react-redux';

import windImg from '../assets/img/wind.png';

const BeaufortWindScale = ['Calm', 'Light Air', 'Light Breeze', 'Gentle Breeze', 'Moderate Breeze', 'Fresh Breeze', 'Strong Breeze',
'Moderate Gale', 'Fresh Gale', 'Strong Gale', 'Whole Gale', 'Storm', 'Hurricane'];

export const WindStatus = () => {
    const weather = useSelector(({weather}) => weather.weather);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);

    const [wind, setWind] = useState(null);
    const [windStatus, setWindStatus] = useState(null);

    useEffect(() => {
        if (weatherLoad) {
            setWind(weather.current.wind_speed);
            let windms = wind / 3.6;
            if (windms <= 0.5) {
                setWindStatus(BeaufortWindScale[0]);
            }
            else if (windms > 0.5 && windms <= 2) {
                setWindStatus(BeaufortWindScale[1]);
            }
            else if (windms > 2 && windms <= 3.5) {
                setWindStatus(BeaufortWindScale[2]);
            }
            else if (windms > 3.5 && windms <= 5.5) {
                setWindStatus(BeaufortWindScale[3]);
            }
            else if (windms > 5.5 && windms <= 8.5) {
                setWindStatus(BeaufortWindScale[4]);
            }
            else if (windms > 8.5 && windms <= 11) {
                setWindStatus(BeaufortWindScale[5]);
            }
            else if (windms > 11 && windms <= 14) {
                setWindStatus(BeaufortWindScale[6]);
            }
            else if (windms > 14 && windms <= 17) {
                setWindStatus(BeaufortWindScale[7]);
            }
            else if (windms > 17 && windms <= 20.5) {
                setWindStatus(BeaufortWindScale[8]);
            }
            else if (windms > 20.5 && windms <= 24) {
                setWindStatus(BeaufortWindScale[9]);
            }
            else if (windms > 24 && windms <= 28) {
                setWindStatus(BeaufortWindScale[10]);
            }
            else if (windms > 28 && windms <= 32){
                setWindStatus(BeaufortWindScale[11]);
            }
            else if (windms > 32) {
                setWindStatus(BeaufortWindScale[12]);
            }    
        }
    }, [weatherLoad]);

    return (
        <div className="highlights__wrapper">
            { weatherLoad && (
                    <div className="highlights__component">
                        <div className="highlights__component-text">
                            Wind Status
                        </div>
                        <div className="highlights__component-wind-wrapper">
                            <img src={windImg} className="highlights__component-wind_img"></img>
                            <div className="highlights__component-info_text">{wind} km/h</div>
                        </div>
                        <div className="highlights__component-bottom-text">
                            {windStatus}
                        </div>
                    </div>
            )}
        </div>
    )
}

export default WindStatus;
