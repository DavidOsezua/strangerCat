import React, { useState } from "react";
import styles from "./TabComponent.module.css";
import PersonalInformation from "./PersonalInformation";
import MySettings from "./MySettings";
import UpdateLogin from "./UpdateLogin";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Personal Information");

  const handleTabSwitching = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div className={`${styles.tabContainer}`}>
        {/************************** EXCHANGE TAB ********************************/}
        <button
          onClick={() => {
            handleTabSwitching("Personal Information");
          }}
          className={`${activeTab === "Personal Information" ? "active" : ""} ${
            styles.btn
          }
           `}
        >
          Personal Information
        </button>

        {/************************** MINING TAB  ********************************/}
        <button
          onClick={() => {
            handleTabSwitching("My Settings");
          }}
          className={`${activeTab === "My Settings" ? "active" : ""}  ${
            styles.btn
          }
           `}
        >
          My Settings
        </button>

        {/************************** FRIENDS TAB ********************************/}
        <button
          onClick={() => {
            handleTabSwitching("Update Login Credentials");
          }}
          className={`${
            activeTab === "Update Login Credentials" ? "active" : ""
          } ${styles.btn}
           `}
        >
          Update Login Credentials
        </button>
      </div>

      {activeTab === "Personal Information" && <PersonalInformation />}
      {activeTab === "My Settings" && <MySettings />}
      {activeTab === "Update Login Credentials" && <UpdateLogin />}
    </>
  );
};

export default TabComponent;
