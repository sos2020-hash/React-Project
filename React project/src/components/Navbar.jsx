import React, { useState } from "react";
import Button from "./Button";
import ShowBtn from "./ShowBtn";
import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = ({ sideBar, setShowForm }) => {
  return (
    <div
      className={styles.navbar}
      style={sideBar ? sidebarStyle : closeSiderStyle}
    >
      <nav>
        <Link to="/">
        <Button text={<i class="fas fa-house-user"></i>}/>
        </Link>
        <Link to="/home">
        <Button text={<i className="fas fa-home">&nbsp;&nbsp;Home</i>} />
        </Link>
        <Link to="/work">
        <Button text={<i className="fas fa-briefcase">&nbsp;&nbsp;Work</i>} />
        </Link>
        <Link to="school">
        <Button text={<i className="fas fa-school">&nbsp;&nbsp;School</i>} />
        </Link>
        <Button
          onAdd={setShowForm}
          text={<i className="fas fa-plus">&nbsp;&nbsp;Add</i>}
        />
      </nav>
      <div>
        <Link to="/siginin">
          <Button
            text={<i className="fas fa-sign-in-alt">&nbsp;&nbsp;SIGN IN</i>}
          />
        </Link>
        <Link to="/login">
          <Button
            text={<i className="fas fa-sign-in-alt">&nbsp;&nbsp;LOG IN</i>}
          />
        </Link>
      </div>
    </div>
  );
};

const sidebarStyle = {
  transform: "translate(0)",
};
const closeSiderStyle = {
  transform: "translate(-100%)",
};

export default Navbar;
