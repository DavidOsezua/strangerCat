import React, { useState } from "react";
import "../App.css";
import styles from "./Swap.module.css";
import { arrowDown, usdt } from "../assets";
import Dropdown from "./Dropdown";

// export const arrowDown = () => {
//   return (
//     <span>
//       <svg
//         width="16"
//         height="10"
//         viewBox="0 0 16 10"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M15 1.86353L9.23737 7.62615C8.55682 8.30671 7.44318 8.30671 6.76263 7.62615L1 1.86353"
//           stroke="#3D0752"
//           stroke-width="2"
//           stroke-miterlimit="10"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         />
//       </svg>
//     </span>
//   );
// };

const Swap = ({modalHandler}) => {
  const [dropdown, setDropDown] = useState(false);
  const [tokenState, setTokenState] = useState([usdt, "USDT"]);

  const showDropdown = () => {
    setDropDown(!false);
  };

  const closeDropdown = () => {
    setDropDown(false);
  };

  const tokenStateHandler = (currentToken) => {
    setTokenState(currentToken);
  };

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

              <div className={`${styles.inputWrapper} flex  w-full relative`}>
                <div
                  className={`${styles.inputContainer} rounded-tr-[0px] rounded-br-[0px] `}
                >
                  <p className={styles.text}>
                    Enter the amount in USD to purchase tokens
                  </p>
                  <input className={`${styles.input}`} />
                </div>

                <>
                  <button className={styles.swapBtn} onClick={showDropdown}>
                    <img src={tokenState[0]} className="w-[15px]" />
                    {tokenState[1]}
                    <img src={arrowDown} />
                  </button>

                  <div className="absolute right-0 top-[51px] ">
                    {dropdown && (
                      <Dropdown
                        tokenStateHandler={tokenStateHandler}
                        closeDropdown={closeDropdown}
                      />
                    )}
                  </div>
                </>
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

        <button className={`${styles.btn}`} onClick={modalHandler}>BUY $STRANGER CAT NOW</button>
      </div>
    </section>
  );
};

export default Swap;
