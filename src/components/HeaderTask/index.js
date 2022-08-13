import React from "react";
import logo from "../../static/logo.png"
import { Link, useLocation } from "react-router-dom";
import styles from "./HeaderTask.module.scss"


const HeaderTask = () => {
   const { pathname } = useLocation();

  return (

 <>

    <div className={styles.header}>
        
      <Link to="/">
        
        <img src={logo} alt="logo" />
      </Link>
      {pathname === "/login" ? (<Link className={styles.btn} to="/signup">Sign Up </Link> ) : (<Link className={styles.btn} to="/login">Login </Link> )}
      
    </div></> 
  )
};

export default HeaderTask;
