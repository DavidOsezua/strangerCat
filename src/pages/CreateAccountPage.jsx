import React from "react";
import SignUp from "../Components/SignUp";
import styles from "./LoginPage.module.css";
import { Logo } from "../assets";

const CreateAccountPage = () => {
  return (
    <section className={`${styles.loginPage}`}>
      <div className={styles.container}>
        <img src={Logo} className="w-[300px]" />
        <SignUp />
      </div>
    </section>
  );
};

export default CreateAccountPage;
