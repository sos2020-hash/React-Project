import React from 'react'
import Button from './Button'
import DeleteBtn from './DeleteBtn'

const Task = ({task, tasks, onDelete}) => {
    return (
        <div className="task-container">
        <div className="task-item">
            <h3 className="id">{task.id}</h3>
            <h3 className="name">{task.name}</h3>
            <h2>{task.description}</h2>
        </div>
        <div className="task-item">  
            <h2>{task.assignedto}</h2>
            <h2>{task.duedate}</h2>
            <h2>{task.status}</h2>
            <Button text={<i class="far fa-edit"></i>}/>
            <DeleteBtn tasks={tasks} onDelete={onDelete} id={task.id} text={<i class="fas fa-trash"></i>}/>
            </div>
        </div>
    )
}

export default Task
