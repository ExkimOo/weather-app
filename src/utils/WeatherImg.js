import clearCloudy from '../assets/img/clear-cloudy.png';
import cloudy from '../assets/img/cloudy.png';
import drizzle from '../assets/img/drizzle.png';
import foggy from '../assets/img/foggy.png';
import mostlyCloudy from '../assets/img/mostly-cloudy.png';
import showers from '../assets/img/showers.png';
import snowFlurries from '../assets/img/snow-flurries.png';
import snow from '../assets/img/snow.png';
import sunny from '../assets/img/sunny.png';
import thunderstorms from '../assets/img/thunderstorms.png';
import windy from '../assets/img/windy.png';

const weatherImg = (weatherId) => {
    if (weatherId >= 200 &&  weatherId <= 232) {
        return thunderstorms;
      }
      else if (weatherId >= 300 &&  weatherId <= 321) {
        return showers;
      }
      else if (weatherId >= 511 && weatherId <= 531) {
        return showers;
      }
      else if (weatherId >= 500 && weatherId <= 504) {
        return drizzle;
      }
      else if (weatherId === 600 || weatherId === 620) {
        return snowFlurries;
      }
      else if (weatherId >= 600 && weatherId <= 622) {
        return snow;
      }
      else if (weatherId >= 701 && weatherId <= 762) {
        return foggy;
      }
      else if (weatherId === 771) {
        return windy;
      }
      else if (weatherId === 800) {
        return sunny;
      }
      else if (weatherId === 801) {
        return clearCloudy;
      }
      else if (weatherId === 802) {
        return cloudy;
      }
      else if (weatherId === 803 || weatherId === 804) {
        return mostlyCloudy;
      }
}

export default weatherImg;