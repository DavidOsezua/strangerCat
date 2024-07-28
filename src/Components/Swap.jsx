import React from "react";
import "../App.css";
import styles from "./Swap.module.css";
import { usdt } from "../assets";

const Swap = () => {
  return (
    <section className={`section pt-[1rem]`}>
      <div className={`sectionContainer ${styles.swapContainer} `}>
        <div className={`${styles.step1Container} py-0 `}>
          <div className={styles.label}>
            <p className={styles.text}>Step 1</p>
            <p className={styles.text}>
              Enter the amount in USD to purchase tokens
            </p>
          </div>

          <div className={`${styles.inputContainer} `}>
            <p className={styles.text}>Amount in USD</p>
            <input placeholder="0" className={`${styles.input}`} />
          </div>
        </div>

        {/************************************* Second Div  ************************************/}
        <div>
          {/************************************* Second inner Div  ************************************/}
          <>
            <div className="pb-[0.5rem]">
              <p className={styles.text}>Step 2</p>
              <p className={styles.text}>
                Please select a currency in order to proceed
              </p>
            </div>

            <div className={`${styles.secondDiv}`}>
              {/************************************* Form and Option Div  one ************************************/}

              <div className={`${styles.inputWrapper} flex  w-full`}>
                <div
                  className={`${styles.inputContainer} rounded-tr-[0px] rounded-br-[0px] `}
                >
                  <p className={styles.text}>
                    Enter the amount in USD to purchase tokens
                  </p>
                  <input className={`${styles.input}`} />
                </div>

                <button className={styles.swapBtn}><img src={usdt} className="w-[15px]"/>USDT</button>
              </div>

              {/************************************* Form and Option Div Two************************************/}

              <div className={`${styles.inputWrapper} flex  w-full`}>
                <div
                  className={`${styles.inputContainer} rounded-tr-[0px] rounded-br-[0px] `}
                >
                  <p className={styles.text}>You receive</p>
                  <input className={`${styles.input}`} />
                </div>

                <p className={`${styles.swapBtn}  `}>$TRANGER CAT</p>
              </div>
            </div>
          </>
        </div>

        <button className={`${styles.btn}`}>BUY $STRANGER CAT NOW</button>
      </div>
    </section>
  );
};

export default Swap;
