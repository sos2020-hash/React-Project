import React from 'react'
import Button from './Button'
import styles from "./styles/Header.module.css"

const Header = ({showSidebar}) => {
    return (
        <div className={styles.header}>
            <Button onAdd={showSidebar} style={toggleBtnStyles} text={<i class="fas fa-bars"></i>}/>
            <nav >TO DO LISTS</nav>
        </div>
    )
}

const toggleBtnStyles = {
    position: 'relative',
    left: '2.5rem',
    fontSize: '2rem',
    backGround: 'cornflowerblue',
    borderColor: 'cornflowerblue',
    color: 'rgb(250, 248, 248)',
    transition: 'all 0.3s linear',
    cursor: 'pointer',
}

export default Header
