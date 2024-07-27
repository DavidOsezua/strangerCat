import React from "react";
import styles from "./Wallet.module.css";

const Wallet = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer pt-0  ${styles.walletContainer}`}>
        <div className={`${styles.wallet}`}>
          <div className={`${styles.textContainer}`}>
            <p>My Wallet Address</p>
            <p>
              Add or Update your SOLANA wallet address here to receive your
              $TRANGER CAT token.Enter the amount in USD to purchase tokens
            </p>
          </div>

          <div className={`${styles.emailContainer}`}>
            <div className={`${styles.inputContainer}`}>
              <input
                className={`${styles.input} `}
                placeholder="Enter your address"
              />
              <p className="text-[#F8A5FD]"> Paste</p>
            </div>

            <button className={`btn`}>Update</button>
          </div>
        </div>

        <div className={`${styles.wallet}`}>
          <p>Token Balance</p>

          <div>
            <p>0 STRANGERCAT</p>
            <span></span>
          </div>

          <button className={`btn`}>Buy STRANGER CAT</button>
        </div>

        {/************************************* Second Div  ************************************/}
      </div>
    </section>
  );
};

export default Wallet;
