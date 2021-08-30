import React from 'react'
import styles from './styles/Button.module.css'


const Button = ({text ,className}) => {
   

    return (
        <div>
            <button className={className}>{text}</button>
        </div>
    )
}

export default Button
