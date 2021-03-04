import React from 'react';
import './stylesEx3.css'; // import CSS styles Ex3

class ButtonSignIn extends React.Component {

    state = {
        isSignedIn: false,
        buttonClick: false,
        bottonFinished: false,
    }

    changeState = () => this.state.isSignedIn ? 
    this.setState({isSignedIn: false}):
    this.setState({isSignedIn: true} && {buttonClick: true})

    finishedButtonAnimation = () => this.state.bottonFinished ?
    this.setState({bottonFinished: false}):
    this.setState({bottonFinished: true})

    

    render() {
        return (
            <>
                <button onClick = {this.changeState && setTimeout(this.finishedButtonAnimation, 1000)} className={`button ${this.state.buttonClick ? 'active' : ''} ${this.state.bottonFinished ? 'finished' : ''}`}>
                    <span className="submit">Submit</span>
                    <span className="loading"><i className="fa fa-refresh"></i></span>
                    <span className="check"><i className="fa fa-check"></i></span>
                </button>
            </>
        )
    }
}

export default ButtonSignIn;