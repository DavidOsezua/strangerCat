import React from "react";
import "../App.css";
import styles from "./Swap.module.css";

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

          <div className={`${styles.inputContainer}`}>
            <p className={styles.text}>Amount in USD</p>
            <input placeholder="0" className={`${styles.input}`} />
          </div>
        </div>

        {/************************************* Second Div  ************************************/}
        <div>
          {/************************************* Second inner Div  ************************************/}
          <>
            <div>
              <p className={styles.text}>Step 2</p>
              <p className={styles.text}>
                Please select a currency in order to proceed
              </p>
            </div>

            <div className={`${styles.secondDiv}`}>
              {/************************************* Form and Option Div  one ************************************/}

              <div className="flex items-center w-full">
                <div className={`${styles.inputContainer}`}>
                  <p className={styles.text}>
                    Enter the amount in USD to purchase tokens
                  </p>
                  <input className={`${styles.input}`} />
                </div>

                <div>
                  <p>USDT</p>
                </div>
              </div>

              {/************************************* Form and Option Div Two************************************/}

              <div className="flex items-center w-full">
                <div className={`${styles.inputContainer}`}>
                  <p className={styles.text}>You receive</p>
                  <input className={`${styles.input}`} />
                </div>

                <div>
                  <p className={`${styles.text}`}>$TRANGER CAT</p>
                </div>
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
