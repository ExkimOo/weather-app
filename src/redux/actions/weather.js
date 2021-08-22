import axios from "axios";

export const setWeather = (weather) => ({
    type: "SET_WEATHER",
    payload: weather,
});

export const fetchWeather = () => (dispatch) => {
    
};