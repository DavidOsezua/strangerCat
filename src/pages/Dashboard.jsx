import React, { useEffect, useState } from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import MidRow from "../Components/MidRow";
import Swap from "../Components/Swap";
import Wallet from "../Components/Wallet";
import ProfileDetails from "../Components/ProfileDetails";
import Transaction from "../Components/Transaction";
import Modal from "../Components/Modal";
import { Axios } from "../req";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [orderDetail, setOrderDetail] = useState(undefined)
  const modalHandler = () => {
    setModal((prev) => !prev);
  };
  const [userDetails, setUserDetails] = useState()


  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")
    console.log(accessToken)
    if(!accessToken){
      toast.warn("Not logged in")
      navigate("/login")
      return 
    }

    Axios.get("/me", {
      headers : {
        "Content-Type" : 'application/json',
        "Authorization" :  `Bearer ${accessToken}`
      }
    }).then((res) => {
      setUserDetails(res.data)
    }).catch((e) => {
      console.log(e)
    })
  }, [])
  return (
    <>
      {modal && <Modal modalHandler={modalHandler} orderDetail={orderDetail} />}
      <DashboardNavbar userDetails={userDetails}/>
      <MidRow />
      <Swap modalHandler={modalHandler}  setOrderDetail={setOrderDetail}/>
      <Wallet  userDetails={userDetails}/>
      <ProfileDetails />
      <Transaction setOrderDetail={setOrderDetail} modalHandler={modalHandler}/>
    </>
  );
};

export default Dashboard;
