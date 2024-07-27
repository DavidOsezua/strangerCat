import React, { useState } from "react";
import styles from "./TabComponent.module.css";

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

      {activeTab === "Personal Information" && (
        <div className="">Personal Information</div>
      )}
      {activeTab === "My Settings" && <div>My Settings</div>}
      {activeTab === "Update Login Credentials" && (
        <div>Update Login Credentials</div>
      )}
    </>
  );
};

export default TabComponent;
