import React from 'react'
import styles from './styles/ToggleBtn.module.css'



const ToggleBtn = ({onAdd, text}) => {
   

    return (
        <div>
            <button onClick={onAdd} style={styles}>{text}</button>
        </div>
    )
}

export default ToggleBtn