import React from 'react';
import './button-style.css'; // import CSS styles Task-3

class ButtonSignIn extends React.Component {

    state = {
        isSignedIn: false,
    }

    onButtonClick = () => setTimeout(() => { this.state.isSignedIn ? this.setState({ isSignedIn: false }) : this.setState({ isSignedIn: true }) }, 3000)

    render() {
        return (
            <div className='homework-three__container'>
                {!this.state.isSignedIn ?
                    <button onClick={this.onButtonClick} className='btn'>Sign In</button> :
                    <p className='homework-three__congratulations'>Congratulations!</p>}
            </div>
        )
    }
}

export default ButtonSignIn;