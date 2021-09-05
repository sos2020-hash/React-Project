import React,{useState} from 'react'
import Button from './Button'
import ShowBtn from './ShowBtn'
import styles from "./styles/Navbar.module.css"
const Navbar = ({sideBar , setShowForm}) => {
    

    return (
        <div 
        className={styles.navbar}
        style={sideBar ? sidebarStyle : closeSiderStyle}
        >
        <nav >
            <Button text={<i className="fas fa-home">&nbsp;&nbsp;Home</i>}/>
            <Button text={<i className="fas fa-briefcase">&nbsp;&nbsp;Work</i>}/>
            <Button text={<i className="fas fa-school">&nbsp;&nbsp;School</i>}/>
            <ShowBtn path={'/calendar'} text={<i className="fas fa-calendar-week">&nbsp;&nbsp;Calendar</i>}/>
            <Button text={<i className="far fa-eye">&nbsp;Show</i>}/>
            <Button onAdd={setShowForm} text={<i className="fas fa-plus">&nbsp;&nbsp;Add</i>}/>
        </nav>
        <div>
            <Button text={<i className="fas fa-sign-in-alt">&nbsp;&nbsp;SIGN IN</i>}/>
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
