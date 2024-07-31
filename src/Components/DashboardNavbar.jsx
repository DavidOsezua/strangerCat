import React from "react";
import styles from "./DashboardNavbar.module.css";
import { Logo } from "../assets";

export const Green = () => {
  return (
    <span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7" cy="7" r="7" fill="#67D8A3" fill-opacity="0.5" />
      </svg>
    </span>
  );
};

const DashboardNavbar = ({userDetails}) => {
  return (
    <header className={styles.navbar}>
      <nav className={styles.navContainer}>
        {/*************  NavLogo ******************/}
        <div className={styles.navLogo}>
          <img src={Logo} alt="Logo" className="w-[100px]" />
        </div>

        {/******************  Menu Items *********************/}
        <div className={`${styles.midRow}`}>
          <div className="flex items-center gap-2 border border-[#fff] px-[1.1rem] py-[0.5rem]">
            <p>STAGE 1</p>
            <Green />
          </div>

          <p className="flex items-center gap-2 border border-[#fff] px-[1.1rem] py-[0.5rem]">
            {`Token holding ${userDetails ? userDetails.balance.toPrecision(8) : 0} $TRANGERCAT`}
          </p>

          <p className="flex items-center gap-2 border border-[#fff] px-[1.1rem] py-[0.5rem]">
            {`Current Fiat Value ${userDetails ? userDetails.balance * 0.00001 : 0} USDT`}
          </p>
        </div>

        <div className={`text-white flex justify-between gap-[5px]`}>
          <button className={`${styles.btn}`}>Buy $trangerCAT</button>
          <select className={`${styles.select}`}>
            <option>User</option>
          </select>

          <p className={`${styles.mobileProfile}`}>U</p>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
