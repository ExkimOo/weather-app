import React from 'react'
import { useDispatch} from 'react-redux';
import { fetchLocation } from '../redux/actions/location';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchLocation());

  return (
   <div className="page_wrapper">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
