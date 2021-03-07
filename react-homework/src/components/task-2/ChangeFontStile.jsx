import React from 'react';
import './font-style.css'; // import CSS styles Task-2

class CheckboxFontStyle extends React.Component {

    state = {
        italic: false
    }

    changeFontStile = () => this.state.italic ? this.setState({ italic: false }) : this.setState({ italic: true })

    render() {
        return <p onClick={this.changeFontStile} className={`text-lorem ${this.state.italic ? 'text-italic' : ''}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nobis esse et nam laboriosam ipsum nostrum nemo. Sapiente voluptates hic tempora quasi officiis ullam facere. Sed eos eveniet officia inventore?
    </p>


    }
}

export default CheckboxFontStyle;