import React from "react";
import styles from './Wallet.module.css'

const Wallet = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer pt-0  ${styles.walletContainer}`}>
        <div className={`${styles.wallet}`}>
          <div>
            <p>My Wallet Address</p>
            <p>
              Add or Update your SOLANA wallet address here to receive your
              $TRANGER CAT token.Enter the amount in USD to purchase tokens
            </p>
          </div>

          <div>
            <div>
              <input className={`${styles.input}`} />
              <p>Paste</p>
            </div>

            <button>Update</button>
          </div>
        </div>

        <div className={`${styles.wallet}`}>
          <p>Token Balance</p>

          <div>
            <p>0 STRANGERCAT</p>
            <span></span>
          </div>

          <button>Buy STRANGER CAT</button>
        </div>

        {/************************************* Second Div  ************************************/}
      </div>
    </section>
  );
};

export default Wallet;
