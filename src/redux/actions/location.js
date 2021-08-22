import axios from 'axios';

import { fetchWeather } from './weather'

export const setGeolocation = (geolocation) => ({
    type: "SET_GEOLOCATION",
    payload: geolocation,
});

export const fetchLocation = () => (dispatch) => {
    axios.get('https://api.ipify.org/?format=json')
    .then(({data}) => {
    axios.get(`https://ipinfo.io/${data.ip}?token=0edf6df4c17f9a`)
    .then(({data}) => {
        dispatch(setGeolocation(data));
        const location = data.loc.split(',');
        dispatch(fetchWeather(location[0], location[1]));
    }); 
})};


