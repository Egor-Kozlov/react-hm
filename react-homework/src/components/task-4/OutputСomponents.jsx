import React from 'react';
import './output-components.css';
import dataItems from '../../data.json';

class OutputComponents extends React.Component {

    state = {
        outputItems: dataItems,
        isButtonOutput: false,
    }

    onButtonClick = () => {
        this.state.isButtonOutput ?
        this.setState({ isButtonOutput: false }) :
        this.setState({ isButtonOutput: true })
    }

    render() {
        return (
            <div className='output-container'>
                {!this.state.isButtonOutput ?
                    <div class="button-container-2">
                        <span class="mas">View names</span>
                        <button onClick={this.onButtonClick} type="button" name="Hover">View names</button>
                    </div>
                    : <div className='list'> {this.state.outputItems.map((item) => {
                        return <div key={item._id} className='list-item'>{`${item.name.first} ${item.name.last}`}</div>
                    })} </div>
                }
            </div>
        )
    }
}

export default OutputComponents