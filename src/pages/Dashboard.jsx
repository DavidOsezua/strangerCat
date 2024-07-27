import React from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import MidRow from "../Components/MidRow";
import Swap from "../Components/Swap";
import Wallet from "../Components/Wallet";
import ProfileDetails from "../Components/ProfileDetails";
import Transaction from "../Components/Transaction";

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <MidRow />
      <Swap />
      <Wallet />
      <ProfileDetails />
      <Transaction />
    </>
  );
};

export default Dashboard;
