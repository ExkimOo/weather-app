import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import view from '../assets/img/view.png';

export const Visibility = () => {
    const weather = useSelector(({weather}) => weather.weather);
    const weatherLoad = useSelector(({weather}) => weather.isLoaded);

    const [vis, setVis] = useState(null);
    const [visStatus, setVisStatus] = useState(null);

    useEffect(() => {
        if (weatherLoad) {
            setVis(weather.current.visibility);
            if (weather.current.visibility <= 45) {
                setVisStatus('Dense fog')
              }
              if (weather.current.visibility > 45 && weather.current.visibility <= 275) {
                setVisStatus('Thick fog')
              }
              if (weather.current.visibility > 275 && weather.current.visibility <= 550) {
                setVisStatus('Fog')
              }
              if (weather.current.visibility > 550 && weather.current.visibility <= 805) {
                setVisStatus('Moderate fog')
              }
              if (weather.current.visibility > 805 && weather.current.visibility <= 1610) {
                setVisStatus('Mist or thin fog')
              }
              if (weather.current.visibility > 1610 && weather.current.visibility <= 3220) {
                setVisStatus('Poor visibility')
              }
              if (weather.current.visibility > 3220 && weather.current.visibility <= 8050) {
                setVisStatus('Moderate visibility')
              }
              if (weather.current.visibility > 8050 && weather.current.visibility <= 16100) {
                setVisStatus('Good visibility')
              }
              if (weather.current.visibility > 16100 && weather.current.visibility <= 48300) {
                setVisStatus('Very good visibility')
              }
              if (weather.current.visibility > 48300) {
                setVisStatus('Exceptional visibility')
              }
        }
    }, [weatherLoad]);

    return (
        <div className="highlights__wrapper">
          { weatherLoad && (
            <div className="highlights__component">
              <div className="highlights__component-text">
                  Visibility
              </div>
              <div className="highlights__component-visibility-wrapper">
                <img src={view} className="highlights__component-visibility"></img>
                <div className="highlights__component-info_text">
                  {vis / 1000} km
                </div>
              </div>
              <div className="highlights__component-bottom-text">
                  {visStatus?.split(' ').map((obj) => {
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

export default Visibility;
