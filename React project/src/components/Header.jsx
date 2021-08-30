import React from 'react'
import Button from './Button'
import styles from "./styles/Header.module.css"

const Header = ({onShow}) => {
    return (
        <div className={styles.header} onClick={() => onShow}>
            <Button className="sidebar-toggle" text={<i class="fas fa-bars"></i>}/>
            <nav >TO DO LISTS</nav>
        </div>
    )
}

export default Header
