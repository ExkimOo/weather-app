import React from 'react';
import { useDispatch } from 'react-redux';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import WeatherImg from '../utils/WeatherImg';
import './App.css';

function App() {
  const dispatch = useDispatch();

  // console.log(WeatherImg(1))
  let [weatherStates, setWeatherStates] = React.useState([
    {time: "3:00 AM", picture: WeatherImg(1), temperature: 18},
    {time: "6:00 AM", picture: WeatherImg(1), temperature: 21},
    {time: "9:00 AM", picture: WeatherImg(1), temperature: 26},
    {time: "12:00 AM", picture: WeatherImg(1), temperature: 29},
    {time: "3:00 PM", picture: WeatherImg(1), temperature: 30},
    {time: "6:00 PM", picture: WeatherImg(1), temperature: 29},
    {time: "9:00 PM", picture: WeatherImg(1), temperature: 26},
    {time: "12:00 PM", picture: WeatherImg(1), temperature: 24}
  ]);

  return (
   <div className="page_wrapper">
      <LeftPanel />
      <RightPanel states={weatherStates}/>
    </div>
  );
}


export default App;
