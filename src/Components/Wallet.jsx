import React, { useState } from "react";
import styles from "./Wallet.module.css";
import { toast } from "react-toastify";
import { Axios } from "../req";

const Wallet = ({userDetails, setUserDetails}) => {

  const [wallet, setWallet] = useState("")

  const updateAddress = async () => {
    const accessToken = localStorage.getItem("accessToken")
    const payload = {wallet}
    toast.promise(Axios.put("/wallet", payload, {
      headers : {
        "Content-Type" : 'application/json',
        "Authorization" :  `Bearer ${accessToken}`
      }
    }), {
      pending  : "Updating Wallet Address",
      error : "Error updating wallet",
      success  : "Wallet updated successfully"
    }).then((res) => {
      setUserDetails(res.data)
    }).catch((e) => {
      console.log(e)
    })
    

  }
  
  return (
    <section className={`section`}>
      <div className={`sectionContainer pt-0  ${styles.walletContainer}`}>
        <div className={`${styles.wallet}`}>
          <div className={`${styles.textContainer}`}>
            <p>My Wallet Address: {`${userDetails  ? userDetails.wallet_address ?  userDetails.wallet_address : "" : ""}`}</p>
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
                onChange={(e) => setWallet(e.target.value)}
                value={wallet}
              />
              <p className="text-[#F8A5FD]"> Paste</p>
            </div>

            <button className={`btn`} onClick={updateAddress}>Update</button>
          </div>
        </div>

        <div className={`${styles.wallet}`}>
          <p>Token Balance</p>

          <div>
            <p>{userDetails ? userDetails.balance.toPrecision(8) : 0} STRANGERCAT</p>
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
