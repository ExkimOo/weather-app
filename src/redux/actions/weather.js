import axios from "axios";

export const setWeather = (weather) => ({
    type: "SET_WEATHER",
    payload: weather,
});

export const setLoadingWeather = (payload) => ({
    type: "SET_LOADING_WEATHER",
    payload,
});

export const fetchWeather = (lat, lon) => (dispatch) => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=2bac6922346d559445eaa1b2e49fe30b`)
    .then(({data}) => {
        dispatch(setWeather(data));
    })
};