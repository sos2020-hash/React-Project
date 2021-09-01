import React from 'react'
import styles from './styles/Button.module.css'


const Button = ({onAdd, text}) => {
   

    return (
        <div>
            <button onClick={onAdd}>{text}</button>
        </div>
    )
}

export default Button
