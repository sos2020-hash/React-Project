import React from 'react'
import Button from './Button'
import styles from "./styles/Navbar.module.css"
const Navbar = ({siderBar}) => {
    return (
        <div className={styles.navbar}>
        <nav >
            <Button text={<i className="fas fa-home">HOME</i>}/>
            <Button text={<i className="fas fa-briefcase">WORK</i>}/>
            <Button text={<i className="fas fa-school">School</i>}/>
            <Button text={<i className="fas fa-calendar-week">TODAY</i>}/>
        </nav>
        <div>
            <Button text={<i className="fas fa-sign-in-alt">SIGN IN</i>}/>
        </div>
        </div>
    )
}

export default Navbar
