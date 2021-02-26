import React from 'react';
import './stylesEx1.css'; // import CSS styles Ex1

function Square (props) {
        return (
            <>
            <div className={`${props.cssClass} square`}>
                {props.label}
            </div>
            </>
        )
}

export default Square;