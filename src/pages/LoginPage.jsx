import React from "react";
import styles from "./LoginPage.module.css";
import { Logo } from "../assets";
import Login from "../Components/Login";

const LoginPage = () => {
  return (
    <section className={`${styles.loginPage}`}>
      <div className={styles.container}>
        <img src={Logo} className="w-[300px]" />

        <Login />
      </div>
    </section>
  );
};

export default LoginPage;
