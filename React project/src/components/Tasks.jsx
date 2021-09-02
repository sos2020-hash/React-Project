import React from 'react'
import Task from './Task'

const Tasks = ({tasks , onDelete}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks
