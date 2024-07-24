import React, { useState } from "react";
import styles from "./Navbar.module.css";
import "../App.css"
import { bar, close, Logo } from "../assets";
import { navLinks } from "../Data/data";
import Telegram from "./Telegram";
import Twitter from "./Twitter";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/*************  NavLogo ******************/}
        <div className={styles.navLogo}>
       
          <img src={Logo} alt="Logo" className="w-[100px]" />

        </div>

        {/******************  Menu Items *********************/}
        <ul className={`${styles.navMenu} ${toggle && styles.showMenu} `}>
          {/********************* Menu close button *******************/}
          <img src={close} onClick={toggleHandler} className={styles.toggle} />

          <div className={styles.mobileBtn}>
            <button>checking</button>
            {/* <Button styles={styles.btn}>Connect Wallet</Button> */}
          </div>

          {/********************* Menu Lists *******************/}

          {navLinks.map((navlink) => (
            <li className={styles.navItems} key={navlink.Link}>{navlink.Link}</li>
          ))}
        </ul>

        {/**************  This is for the elements at the right (notification,button,upload) *********************/}
      
          {/**************** Mobile right side elements ******************/}
          <div className={styles.mobile}>
          
            <img
              src={bar}
              onClick={toggleHandler}
              className={`${styles.bar}`}
            />
          </div>

          {/********************* Desktop Right side elements ********************/}
          <div className={styles.desktop}>
         <Telegram/>
            {/* <Button styles={styles.desktopBtn}>Connect Wallet</Button> */}
           <Twitter/>
          </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
