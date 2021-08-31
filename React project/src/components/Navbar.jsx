import React from 'react'
import Button from './Button'
import styles from "./styles/Navbar.module.css"
const Navbar = ({sideBar}) => {

    return (
        <div 
        className={styles.navbar}
        style={sideBar ? sidebarStyle : closeSiderStyle}
        >
        <nav >
            <Button text={<i className="fas fa-home">Home</i>}/>
            <Button text={<i className="fas fa-briefcase">Work</i>}/>
            <Button text={<i className="fas fa-school">School</i>}/>
            <Button text={<i className="fas fa-calendar-week">Today</i>}/>
            <Button text={<i className="far fa-eye">Show</i>}/>
            <Button text={<i className="fas fa-plus">Add</i>}/>
        </nav>
        <div>
            <Button text={<i className="fas fa-sign-in-alt">SIGN IN</i>}/>
        </div>
        </div>
    )
}

const sidebarStyle = {
    transform:"translate(0)"
}
const closeSiderStyle = {
    transform:"translate(-100%)"
}

export default Navbar
