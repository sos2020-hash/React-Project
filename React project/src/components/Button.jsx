import React from 'react'
import styles from './styles/Button.module.css'


const Button = ({text ,showSidebar}) => {
   

    return (
        <div>
            <button onClick={showSidebar}>{text}</button>
        </div>
    )
}

export default Button
