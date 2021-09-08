import React from 'react'
import UpdateBtn from './UpdateBtn'
import DeleteBtn from './DeleteBtn'

const Task = ({task, tasks, onDelete, onUpdate}) => {
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    return (
        <div className="task-container" id={task.key}>
        <div className="task-item">
            <h3 className="id">{task.id}</h3>
            <h3 className="name"><span className="name-title">Name:</span><br/>{task.name}</h3>
            <h2><span className="name-title">Description:</span><br/>{task.description}</h2>
        </div>
        <div className="task-item">  
            <h2>Assiged To: {task.assignedto}</h2>
            <h2>Duedate:<br/>{formatDate(task.duedate)}</h2>
            <h2>Status:<br/>{task.status}</h2>
            <UpdateBtn onUpdate={onUpdate} id={task.id}/>
            <DeleteBtn tasks={tasks} onDelete={onDelete} id={task.id} text={<i class="fas fa-trash"></i>}/>
            </div>
        </div>
    )
}

export default Task
