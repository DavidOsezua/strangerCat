import React from "react";
import styles from "./Modal.module.css";

export const QrCode = () => {
  return (
    <span>
      <svg
        width="136"
        height="196"
        viewBox="0 0 196 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24.875 24.875H49.25V49.25H24.875V24.875Z" fill="white" />
        <path
          d="M73.625 0.5V73.625H0.5V0.5H73.625ZM61.4375 12.6875H12.6875V61.4375H61.4375V12.6875ZM49.25 146.75H24.875V171.125H49.25V146.75Z"
          fill="white"
        />
        <path
          d="M73.625 122.375V195.5H0.5V122.375H73.625ZM12.6875 134.562V183.312H61.4375V134.562H12.6875ZM146.75 24.875H171.125V49.25H146.75V24.875Z"
          fill="white"
        />
        <path
          d="M122.375 0.5V73.625H195.5V0.5H122.375ZM183.312 12.6875V61.4375H134.562V12.6875H183.312ZM98 12.6875V0.5H110.188V24.875H98V49.25H85.8125V12.6875H98ZM98 73.625V49.25H110.188V73.625H98ZM73.625 98V85.8125H85.8125V73.625H98V98H110.188V85.8125H171.125V98H122.375V110.188H85.8125V98H73.625ZM73.625 98V110.188H24.875V98H12.6875V110.188H0.5V85.8125H37.0625V98H73.625ZM195.5 110.188H183.312V85.8125H195.5V110.188ZM183.312 110.188H171.125V134.562H195.5V122.375H183.312V110.188ZM134.562 110.188H158.938V122.375H146.75V134.562H134.562V110.188ZM158.938 146.75V134.562H146.75V146.75H134.562V158.938H110.188V171.125H146.75V146.75H158.938ZM158.938 146.75H195.5V158.938H171.125V171.125H158.938V146.75ZM110.188 134.562V146.75H122.375V122.375H85.8125V134.562H110.188Z"
          fill="white"
        />
        <path
          d="M85.8125 146.75H98V183.312H146.75V195.5H85.8125V146.75ZM195.5 171.125V195.5H158.938V183.312H183.312V171.125H195.5Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

const Modal = ({ modalHandler }) => {
  return (
    <>
      <div className={`${styles.overlay}`}>
        <div className={`${styles.overlay2}`} onClick={modalHandler}></div>
        <div className={`${styles.wrapper}`}>
          <div className={`flex justify-center`}>
            <QrCode />
          </div>
          <p className="text-center w-[70%] mx-auto pb-[1rem]">
            Send only USDT to this address. Sending any other coin may result in
            permanent loss.
          </p>

          <div className="flex justify-between pb-[1rem]">
            <p>Network</p>
            <p>BNB Smart chain(BEP20)</p>
          </div>
          <div className="flex justify-between">
            <p>Wallet address</p>
            <p>0x05dA5wbDD779AekJJs23c4FFa5 </p>
          </div>

          <div className="flex gap-3 pt-3 ">
            <button className={`${styles.btn} text-[#3D0752]`}>
              Copy address
            </button>
            <button className={`${styles.btn} bg-[#5F3873] `}>
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
