import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUnit } from '../redux/actions/unit';

import './App.css';

export const Degrees = ({text}) => {  
    const dispatch = useDispatch();

    const unit = useSelector(({unit}) => unit.unit);

    const unitClick = () => {
        dispatch(setUnit(unit === "C" ? "F" : "C"));
    }

    return (
        <div className={text === unit ? "ellipse__text active" : "ellipse__text"} onClick={unitClick}>
            {text}&deg;
        </div>
    )
}

export default Degrees;
