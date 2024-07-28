import React from "react";
import styles from "./PersonalInformation.module.css";
import "../App.css";

const PersonalInformation = () => {
  return (
    <div className={`${styles.step1Container} py-0 `}>
      <div className={`inputContainer`}>
        <p className={styles.text}>Full Name</p>
        <input placeholder="0" className={`input`} />
      </div>

      <div className={`inputContainer`}>
        <p className={styles.text}>Full Name</p>
        <input placeholder="0" className={`input`} />
      </div>

      <div className={`inputContainer`}>
        <p className={styles.text}>Full Name</p>
        <input placeholder="0" className={`input`} />
      </div>
    </div>
  );
};

export default PersonalInformation;
