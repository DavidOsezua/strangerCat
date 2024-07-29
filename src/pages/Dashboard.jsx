import React, { useState } from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import MidRow from "../Components/MidRow";
import Swap from "../Components/Swap";
import Wallet from "../Components/Wallet";
import ProfileDetails from "../Components/ProfileDetails";
import Transaction from "../Components/Transaction";
import Modal from "../Components/Modal";

const Dashboard = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      {modal && <Modal modalHandler={modalHandler} />}
      <DashboardNavbar />
      <MidRow />
      <Swap modalHandler={modalHandler} />
      <Wallet />
      <ProfileDetails />
      <Transaction />
    </>
  );
};

export default Dashboard;
