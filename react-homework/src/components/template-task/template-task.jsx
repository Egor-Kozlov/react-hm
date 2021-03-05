import React from 'react';
import './template-task.css';

function TemplateTasks (props) {
    return (
        <div className="home-work-title-container">
            <p>№{`${props.numberHomeWork} Task :`}</p>
            <p className='task-name'><a href={props.trelloTaskUrl} target="_blank">{props.trelloTaskName}</a></p>
        </div>
    )
}

export default TemplateTasks;