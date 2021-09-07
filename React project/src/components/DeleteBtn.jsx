import React, {useState} from 'react'
import styles from './styles/Button.module.css'




const DeleteBtn = ({text ,id ,tasks, onDelete}) => {
    return (
        <div className="taskBtn-container">
            <button className="taskBtn" id={id} onClick={() => onDelete(id)}>{text}</button>
        </div>
    )
}

export default DeleteBtn
