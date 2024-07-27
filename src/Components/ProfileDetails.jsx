import React, { useState } from "react";
import styles from "./ProfileDetails.module.css";
import "../App.css";
import TabComponent from "./TabComponent";

const ProfileDetails = () => {
  return (
    <section className={`section `}>
      <div
        className={`sectionContianer  text-[#fff] ${styles.profileContainer}`}
      >
        <p>My Profile Details</p>
        <TabComponent />

        <button className="btn">Update Profile</button>
      </div>
    </section>
  );
};

export default ProfileDetails;
