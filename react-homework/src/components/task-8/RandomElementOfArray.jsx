import React from 'react';
import userNames from '../../names.json';
import './random-element-array.css';


class RandomElementOfArray extends React.Component {

    state = {
        people: ['Egor', 'Serg', ]
    }

    onAddName = () => {
        const index = Math.floor(Math.random() * 13);
        const newPeople = [...this.state.people, userNames[index]]
        this.setState({people: newPeople})
    }

    render () {
        return (
            <div className="button-container">
                <button className='button-add-name' onClick = {this.onAddName}>Add Name!</button>
                <ul> {this.state.people.map((item) => {
                    return <li>{item}</li>
                })} </ul>
            </div>
        )
    }
}



export default RandomElementOfArray