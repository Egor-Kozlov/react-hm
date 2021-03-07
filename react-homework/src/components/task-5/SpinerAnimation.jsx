import React from 'react';
import './spiner-animation.css'

class SpinerAnimation extends React.Component {

    state = {
        animated: false,
    }

    onAnimation = () => {
        this.state.animated ?
        this.setState({ animated: false}) :
        this.setState({ animated: true})
    }

    render() {
        return (
            <>
            <div className="loader-container">
                <div className={`loader ${this.state.animated && 'loader-animated' }`}></div>
            </div>
            <div class="button-container-1">
                <span class="mas">{`${!this.state.animated ? 'Play' : 'Stop'}`}</span>
                <button onClick = {this.onAnimation} id='work' type="button" name="Hover">Play</button>
            </div>
            </>    
        )
    }
}

export default SpinerAnimation