import React from 'react';
import './input-change.css'

class InputChange extends React.Component {

    state = {
        value: ''
    }

    onChangeInput = (event) => {
        this.setState({value: event.target.value})
    }

    render () {
        return (
            <div className = 'change-input__container'>
                <p>Your input: <input type="text" onChange = {this.onChangeInput}/></p>
                <p>Check result: {this.state.value}</p>
            </div>
        )
    }
}

export default InputChange;