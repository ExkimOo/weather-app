import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import './App.css';

function App() {
  let [weatherStates, setWeatherStates] = React.useState([
    {time: "3:00 AM", picture: "1", temperature: 18},
    {time: "6:00 AM", picture: "2", temperature: 21},
    {time: "9:00 AM", picture: "3", temperature: 26},
    {time: "12:00 AM", picture: "4", temperature: 29},
    {time: "3:00 PM", picture: "5", temperature: 30},
    {time: "6:00 PM", picture: "6", temperature: 29},
    {time: "9:00 PM", picture: "7", temperature: 26},
    {time: "12:00 PM", picture: "8", temperature: 24}
  ]);

  return (
   <div className="page_wrapper">
      <LeftPanel />
      <RightPanel states={weatherStates}/>
    </div>
  );
}


export default App;
