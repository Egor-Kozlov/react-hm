import React from 'react';
import './button-counter.css'

function Buttons (props) {
    return (
        <div className="button-counter-container">
            <button onClick = {props.onClick} className='button-counter'>{props.label}</button>
        </div>
    ) 
}

export default Buttons;