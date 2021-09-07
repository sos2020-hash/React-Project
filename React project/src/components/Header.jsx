import React from 'react'
import Button from './Button'
import styles from "./styles/Header.module.css"
import ToggleBtn from './ToggleBtn'

const Header = ({showSidebar}) => {
    return (
        <div className={styles.header}>
            <Button onAdd={showSidebar}  text={<i class="fas fa-bars"></i>}/>
            <nav >TO DO LISTS</nav>
        </div>
    )
}

export default Header
