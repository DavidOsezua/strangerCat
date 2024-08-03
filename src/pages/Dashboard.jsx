import React, { useEffect, useState } from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import MidRow from "../Components/MidRow";
import Swap from "../Components/Swap";
import Wallet from "../Components/Wallet";
import { toast } from "react-toastify";
import ProfileDetails from "../Components/ProfileDetails";
import useClipboardPaste from "../CustomHook/useClipboardPaste";
import Transaction from "../Components/Transaction";
import Modal from "../Components/Modal";
import styles from "./Dashboard.module.css";
import { Axios } from "../req";
import { modalClose } from "../assets";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [orderDetail, setOrderDetail] = useState(undefined);
  const modalHandler = () => {
    setModal((prev) => !prev);
  };
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    if (userDetails && !userDetails.wallet_address) {
      setModal(true);
    }
  }, [userDetails]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      toast.warn("Not logged in");
      navigate("/login");
      return;
    }

    Axios.get("/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [initialmodal, setInitialModal] = useState(false);
  const InitialmodalHandler = () => {
    setInitialModal(!initialmodal);
  };

  useEffect(() => {
    setInitialModal(true);
  }, []);

  const [pastedText, pasteFromClipboard] = useClipboardPaste();

  const [wallet, setWallet] = useState("");

  useEffect(() => {
    if (pastedText !== "") {
      setWallet(pastedText);
    }
  }, [pastedText]);

  const updateAddress = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const payload = { wallet };
    toast
      .promise(
        Axios.put("/wallet", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        {
          pending: "Updating Wallet Address",
          error: "Error updating wallet",
          success: "Wallet updated successfully",
        }
      )
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {initialmodal && (
        <div className={styles.overlay}>
          <div className={styles.overlay2} onClick={InitialmodalHandler}></div>
          <div className={`${styles.walletContainer}`}>
            <div
              className="flex justify-end cursor-pointer"
              onClick={InitialmodalHandler}
            >
              <img src={modalClose} />
            </div>
            <p className="text-[0.8rem] w-[70%] mx-auto text-center ">
              Please ADD or UPDATE your SOLANA wallet address to receive your
              $STRANGER token
            </p>

            <div className={`${styles.wallet}`}>
              <div className={`${styles.textContainer}`}>
                <p>
                  My Wallet Address:{" "}
                  {`${
                    userDetails
                      ? userDetails.wallet_address
                        ? userDetails.wallet_address
                        : ""
                      : ""
                  }`}
                </p>
                <p>
                  Add or Update your SOL wallet address if you want to receive
                  your $STRANGER token.
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
                  <button onClick={pasteFromClipboard} className="text-[#fff]">
                    {" "}
                    Paste
                  </button>
                </div>

                <button className={`btn`} onClick={updateAddress}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal && <Modal modalHandler={modalHandler} orderDetail={orderDetail} />}
      <DashboardNavbar userDetails={userDetails} />
      <MidRow />
      <Swap modalHandler={modalHandler} setOrderDetail={setOrderDetail} />
      <Wallet userDetails={userDetails} setUserDetails={setUserDetails} />
      {/* <ProfileDetails /> */}
      <Transaction
        setOrderDetail={setOrderDetail}
        modalHandler={modalHandler}
      />
    </>
  );
};

export default Dashboard;
