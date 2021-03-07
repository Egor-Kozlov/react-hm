import React from 'react';
import './squares-style.css'; // import CSS styles Task-1

function Square(props) {
    return (
        <>
            <div className={`${props.cssClass} square`}>
                {props.label}
            </div>
        </>
    )
}

export default Square;