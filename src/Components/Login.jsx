import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={`${styles.loginContent}`}>
      <form action="index.html" className={styles.form}>
        <div className={`${styles.inputDiv} one`}>
          <div className="i">
            <img />
          </div>
          <div className={`${styles.div}`}>
            <p>Username</p>
            <input
              type="text"
              className={`${styles.input}`}
              placeholder="enter your email"
            />
          </div>
        </div>

        <div className={`${styles.inputDiv} pass`}>
          <div className="i">
            <i className="fas fa-lock"></i>
          </div>
          <div className={`${styles.div}`}>
            <p>Password</p>
            <input type="password" className={`${styles.input}`} />
          </div>
        </div>

        <button className={`${styles.btn}`}>Login</button>

        <div className={`flex justify-between text-[#fff] text-[0.6rem] pt-[0.8rem]`}>
          <p>Remember Me</p>
          <p>Forgot Password</p>
        </div>

        <p className={` text-[#fff] text-[0.6rem] pt-[1rem]`}>
          Need to create an account? Sign up
        </p>
      </form>
    </div>
  );
};

export default Login;
