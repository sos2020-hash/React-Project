import React from 'react'
import Button from './Button'
import styles from "./styles/Header.module.css"

const Header = ({showSidebar}) => {
    return (
        <div className={styles.header}>
            <Button showSidebar={showSidebar} className="sidebar-toggle" text={<i class="fas fa-bars"></i>}/>
            <nav >TO DO LISTS</nav>
        </div>
    )
}

export default Header
