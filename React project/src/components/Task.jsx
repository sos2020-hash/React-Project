import React from 'react'
import UpdateBtn from './UpdateBtn'
import DeleteBtn from './DeleteBtn'

const Task = ({task, tasks, onDelete, onUpdate}) => {
    return (
        <div className="task-container" id={task.key}>
        <div className="task-item">
            <h3 className="id">{task.id}</h3>
            <h3 className="name">{task.name}</h3>
            <h2>{task.description}</h2>
        </div>
        <div className="task-item">  
            <h2>{task.assignedto}</h2>
            <h2>{task.duedate}</h2>
            <h2>{task.status}</h2>
            <UpdateBtn onUpdate={onUpdate} id={task.id}/>
            <DeleteBtn tasks={tasks} onDelete={onDelete} id={task.id} text={<i class="fas fa-trash"></i>}/>
            </div>
        </div>
    )
}

export default Task
