import React from 'react'
import Button from './Button'

const Task = ({task}) => {
    return (
        <div className="task-container">
        <div className="task-item">
            <h3 className="id">{task.id}</h3>
            <h3 className="name">{task.name}</h3>
            <h2>{task.Description}</h2>
        </div>
        <div className="task-item">  
            <h2>{task.assignto}</h2>
            <h2>{task.Duedate}</h2>
            <h2>{task.Status}</h2>
            <Button text={<i class="far fa-edit"></i>}/>
            <Button text={<i class="fas fa-trash"></i>}/>
            </div>
        </div>
    )
}

export default Task
