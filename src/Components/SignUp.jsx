import React from "react";
import styles from "./SignUp.module.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={`${styles.loginContent}`}>
      <p>LOGIN</p>
      <form action="index.html" className={styles.form}>
        <div className={`${styles.inputDiv} one`}>
          <div className="i">
            <img />
          </div>
          <div className={`inputContainer`}>
            <input type="text" className={`input`} placeholder="Email" />
          </div>
        </div>

        <div className={`${styles.inputDiv} pass`}>
          <div className={`inputContainer`}>
            <input type="password" className={`input`} placeholder="password" />
          </div>
        </div>

        <div className={`${styles.inputDiv} pass`}>
          <div className={`inputContainer`}>
            <input
              type="password"
              className={`input`}
              placeholder=" Confirm password"
            />
          </div>
        </div>

        <div className="text-[#fff] text-[0.6rem] ">
          <p className="pb-[0.7rem]">
            Sign me up to receive email notification from us with deals, sales
            and updates
          </p>
          <p>I agree to the Terms and Condition and Privacy Policy</p>
        </div>

        <button className={`${styles.btn}`}>Create account</button>

        <button className={` text-[#fff] text-[0.6rem] pt-[1rem]`}>
          <NavLink to="/login">
            {" "}
            Already have an account? Sign in instead
          </NavLink>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
