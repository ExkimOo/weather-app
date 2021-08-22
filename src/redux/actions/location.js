import axios from 'axios';

export const setGeolocation = (geolocation) => ({
    type: "SET_GEOLOCATION",
    payload: geolocation,
});

export const fetchLocation = () => (dispatch) => {
    axios.get('https://api.ipify.org/?format=json')
    .then(({data}) => {
    // console.log("IP");
    // console.log(data.ip);
    axios.get(`https://ipinfo.io/${data.ip}?token=0edf6df4c17f9a`)
    .then(({data}) => {
        // console.log(data);
        dispatch(setGeolocation(data));
    }); 
})};


