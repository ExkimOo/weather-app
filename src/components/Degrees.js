import React from 'react';
import './App.css';

export const Degrees = ({text, active}) => {
    return (
        <div className={active ? "ellipse__text active" : "ellipse__text"}>
            {text}
        </div>
    )
}

export default Degrees;
