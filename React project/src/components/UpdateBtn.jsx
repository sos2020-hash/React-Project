import React from 'react'
import styles from './styles/Button.module.css'
import { Link } from 'react-router-dom'


const UpdateBtn = ({onUpdate, id}) => {
    return (
        <div className="taskBtn-container">
            <button className="taskBtn" onClick={() => onUpdate(id)}><i class="far fa-edit"></i></button>
        </div>
    )
}

export default UpdateBtn